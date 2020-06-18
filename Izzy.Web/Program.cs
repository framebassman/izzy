using System;
using System.IO;
using System.Net;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Sentry.Extensibility;
using Serilog;

namespace Izzy.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Serilog.Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(BuildConfiguration())
                .CreateLogger();
            try
            {
                Serilog.Log.Logger.Information("Getting started...");
                CreateWebHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Serilog.Log.Logger.Fatal(ex, "Host terminated unexpectedly");
            }
            finally
            {
                Serilog.Log.CloseAndFlush();
            }
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseSerilog()
                .UseSentry(options =>
                    {
                        options.Environment = CurrentEnv();
                        options.MaxQueueItems = 100;
                        options.ShutdownTimeout = TimeSpan.FromSeconds(5);
                        options.DecompressionMethods = DecompressionMethods.None;
                        options.MaxRequestBodySize = RequestSize.Always;
                        options.Release = Environment.GetEnvironmentVariable("SENTRY_RELEASE");
                    }
                );

        private static IConfiguration BuildConfiguration()
        {
            return new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{CurrentEnv()}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }

        private static String CurrentEnv()
        {
            return Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
        }
    }
}
