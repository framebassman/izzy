using System;
using System.IO;
using System.Net;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Sentry;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Compact;

namespace Izzy.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls("http://0.0.0.0:5000")
                .UseSerilog((h, c) =>
                    c.Enrich.FromLogContext()
                        .MinimumLevel.Information()
                        .MinimumLevel.Override("Izzy.Web", LogEventLevel.Information)
                        .WriteTo.ColoredConsole()
                        .WriteTo.Sentry(s =>
                        {
                            s.MinimumBreadcrumbLevel = LogEventLevel.Debug;
                            s.MinimumEventLevel = LogEventLevel.Error;
                            
                        })
                )
                .UseSentry(options =>
                {
                    options.Release = "1.0.5";
                    options.Environment = CurrentEnv();
                    options.MaxQueueItems = 100;
                    options.ShutdownTimeout = TimeSpan.FromSeconds(5);
                    options.DecompressionMethods = DecompressionMethods.None;
                })
                ;

        private static String CurrentEnv()
        {
            return Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
        }
    }
}
