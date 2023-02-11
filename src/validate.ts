import { ZodSchema } from 'zod'
import { isZodDto, ZodDto } from './dto'
import { createZodValidationException, ZodExceptionCreator } from './exception'

export async function validate(
  value: unknown,
  schemaOrDto: ZodSchema | ZodDto,
  createValidationException: ZodExceptionCreator = createZodValidationException
) {
  const schema = isZodDto(schemaOrDto) ? schemaOrDto.schema : schemaOrDto

  const result = await schema.safeParseAsync(value)

  if (!result.success) {
    throw createValidationException(result.error)
  }

  return result.data
}
