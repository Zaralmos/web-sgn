using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Repositories
{
    public static class RepositoriesProviderExtension
    {
        public static IServiceCollection AddBaseRepository(this IServiceCollection services)
        {
            services.AddTransient<IBaseEntitiesRepository, BaseEntitiesRepository>();
            return services;
        }
    }
}
