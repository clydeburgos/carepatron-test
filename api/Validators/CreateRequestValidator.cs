using FluentValidation;

namespace api.Validators
{
    public class CreateRequestValidator : AbstractValidator<api.Models.Client>
    {
        public CreateRequestValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty();
            RuleFor(x => x.LastName)
                .NotEmpty();
            RuleFor(x => x.Email)
                .NotEmpty();
            RuleFor(x => x.PhoneNumber)
                .NotEmpty();
        }
    }
}
