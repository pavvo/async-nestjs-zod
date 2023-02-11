import { ZodTypeDef, ZodSchema, ZodError, ZodTypeAny } from 'zod';
import { BadRequestException, CanActivate, Type, PipeTransform } from '@nestjs/common';
import { SchemaObjectFactory } from '@nestjs/swagger/dist/services/schema-object-factory';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

interface ZodDto<TOutput = any, TDef extends ZodTypeDef = ZodTypeDef, TInput = TOutput> {
    new (): TOutput;
    isZodDto: true;
    schema: ZodSchema<TOutput, TDef, TInput>;
    create(input: unknown): TOutput;
}
declare function createZodDto<TOutput = any, TDef extends ZodTypeDef = ZodTypeDef, TInput = TOutput>(schema: ZodSchema<TOutput, TDef, TInput>): ZodDto<TOutput, TDef, TInput>;

declare class ZodValidationException extends BadRequestException {
    private error;
    constructor(error: ZodError);
    getZodError(): ZodError<any>;
}
declare type ZodExceptionCreator = (error: ZodError) => Error;

declare type Source = 'body' | 'query' | 'params';

interface ZodBodyGuardOptions {
    createValidationException?: ZodExceptionCreator;
}
declare type ZodGuardClass = new (source: Source, schemaOrDto: ZodSchema | ZodDto) => CanActivate;
declare function createZodGuard({ createValidationException, }?: ZodBodyGuardOptions): ZodGuardClass;
declare const ZodGuard: ZodGuardClass;
declare const UseZodGuard: (source: Source, schemaOrDto: ZodSchema | ZodDto) => MethodDecorator & ClassDecorator;

declare function patchNestJsSwagger(SchemaObjectFactory?: Type<SchemaObjectFactory>): void;

declare function zodToOpenAPI(zodType: ZodTypeAny): SchemaObject;

interface ZodValidationPipeOptions {
    createValidationException?: ZodExceptionCreator;
}
declare type ZodValidationPipeClass = new (schemaOrDto?: ZodSchema | ZodDto) => PipeTransform;
declare function createZodValidationPipe({ createValidationException, }?: ZodValidationPipeOptions): ZodValidationPipeClass;
declare const ZodValidationPipe: ZodValidationPipeClass;

export { UseZodGuard, ZodDto, ZodGuard, ZodValidationException, ZodValidationPipe, createZodDto, createZodGuard, createZodValidationPipe, patchNestJsSwagger, zodToOpenAPI };
