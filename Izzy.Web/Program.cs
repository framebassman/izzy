using System;
using System.IO;
using System.Net;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
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
                .UseUrls("http://0.0.0.0:5000")
                .UseSerilog()
                .UseSentry(options =>
                {
                    options.Release = "1.0.7";
                    options.Environment = CurrentEnv();
                    options.MaxQueueItems = 100;
                    options.ShutdownTimeout = TimeSpan.FromSeconds(5);
                    options.DecompressionMethods = DecompressionMethods.None;
                });

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
