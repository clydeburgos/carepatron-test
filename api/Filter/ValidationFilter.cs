﻿using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace api.Filter
{
    public class ValidationFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            if (!context.ModelState.IsValid)
            {
                var errors = context.ModelState.Where(e => e.Value.Errors.Any())
                    .ToDictionary(c => c.Key, c => c.Value.Errors.Select(x => x.ErrorMessage))
                    .ToList();

                var errorResponse = new ErrorResponse();

                foreach (var error in errors)
                {
                    foreach (var innerError in error.Value)
                    {
                        var errorModel = new ErrorModel()
                        {
                            FieldName = error.Key,
                            Message = innerError
                        };

                        errorResponse.Errors.Add(errorModel);
                    }
                }

                context.Result = new BadRequestObjectResult(errorResponse);
                return;
            }


            await next();
        }
    }
}
