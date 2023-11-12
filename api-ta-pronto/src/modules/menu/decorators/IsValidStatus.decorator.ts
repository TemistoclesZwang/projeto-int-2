import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
class IsValidStatusConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const validStatus = ['cancelado', 'preparando', 'concluido'];
    return validStatus.includes(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} deve ser um dos seguintes valores: cancelado, preparando, concluido`;
  }
}

export function IsValidStatus(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsValidStatusConstraint,
    });
  };
}
