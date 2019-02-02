using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

namespace FakeSender.Api.Middlewares
{
    public class HealthCheckMiddleware
    {
        private const string _path = "/healthcheck";
        private readonly RequestDelegate _next;

        public HealthCheckMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (!context.Request.Path.Equals(_path, StringComparison.OrdinalIgnoreCase))
            {
                await _next(context);
            }
            else
            {
                context.Response.ContentType = "text/plain";
                context.Response.StatusCode = 200;
                context.Response.Headers.Add(HeaderNames.Connection, "close");
                await context.Response.WriteAsync("OK");
            }
        }
    }
}
