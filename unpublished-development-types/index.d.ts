// Type declarations for ember-data modules used by this addon.
// ember-data 5.x has types in unstable-preview-types but they're
// not exported via the main package entry points.

declare module '@ember-data/adapter/rest' {
  import type Owner from '@ember/owner';

  export default class RESTAdapter {
    constructor(owner?: Owner);
    static create(props?: Record<string, unknown>): RESTAdapter;
    defaultSerializer: string;
    pathForType(modelName: string): string;
    buildURL(modelName: string, id?: string | number, snapshot?: unknown, requestType?: string, query?: Record<string, unknown>): string;
    handleResponse(status: number, headers: Record<string, unknown>, payload: unknown, requestData: unknown): unknown;
    isInvalid(status: number, headers: Record<string, unknown>, payload: unknown): boolean;
    parseErrorResponse(responseText: string): unknown;
  }
}

declare module '@ember-data/adapter/error' {
  export default class AdapterError extends Error {
    errors: unknown[];
    isAdapterError: boolean;
  }

  export class InvalidError extends AdapterError {
    constructor(errors?: unknown[]);
  }
}

declare module '@ember-data/serializer/rest' {
  export default class RESTSerializer {
    store: import('@ember-data/store').default;
    normalize(typeClass: unknown, hash: Record<string, unknown>, prop: string): Record<string, unknown>;
    normalizeResponse(store: unknown, primaryModelClass: unknown, payload: unknown, id: string | number, requestType: string): unknown;
    serializeIntoHash(hash: Record<string, unknown>, typeClass: unknown, snapshot: unknown, options?: Record<string, unknown>): void;
    serializerFor(name: string): RESTSerializer;
    extractErrors(store: unknown, typeClass: unknown, error: unknown, id: string): unknown;
    extractRelationships(modelClass: unknown, resourceHash: Record<string, unknown>): Record<string, unknown>;
  }

  export const EmbeddedRecordsMixin: unknown;
}

declare module '@ember-data/store' {
  export default class Store {
    createRecord(modelName: string, inputProperties?: Record<string, unknown>): unknown;
    findAll(modelName: string, options?: Record<string, unknown>): Promise<unknown[]>;
    findRecord(modelName: string, id: string | number, options?: Record<string, unknown>): Promise<unknown>;
    peekRecord(modelName: string, id: string | number): unknown;
    peekAll(modelName: string): unknown[];
    push(data: unknown): unknown;
    modelFor(modelName: string): unknown;
    serializerFor(modelName: string): unknown;
  }
}

declare module '@ember-data/model' {
  export default class Model {
    id: string | null;
    static eachRelationship<T>(callback: (key: string, meta: Record<string, unknown>) => void, binding?: unknown): void;
    eachRelationship<T>(callback: (key: string, meta: Record<string, unknown>) => void, binding?: unknown): void;
    belongsTo(key: string): { id(): string | null };
    errors: {
      has(attribute: string): boolean;
      errorsFor(attribute: string): Array<{ attribute: string; message: string }>;
      messages: string[];
    };
    save(): Promise<this>;
    get(key: string): unknown;
    setProperties(properties: Record<string, unknown>): void;
    modelName: string;
  }

  export function attr(type?: string): PropertyDecorator;
  export function belongsTo(modelName: string, options?: Record<string, unknown>): PropertyDecorator;
  export function hasMany(modelName: string, options?: Record<string, unknown>): PropertyDecorator;
}

declare module 'ember-data' {
  import Model from '@ember-data/model';

  namespace DS {
    export { Model };
    export class Snapshot<K = unknown> {
      id: string | null;
      modelName: string;
      belongsTo(key: string | symbol): Snapshot | null;
    }
    export class PromiseObject<T> extends Promise<T> {}
    export class PromiseManyArray<T> extends Promise<T[]> {
      get(key: string): unknown;
      toArray(): T[];
    }
  }

  export default DS;
}

declare module 'ember-data/types/registries/model' {
   
  export default interface ModelRegistry {
    [key: string]: unknown;
  }
}

declare module 'ember-data/types/registries/serializer' {
   
  export default interface SerializerRegistry {
    [key: string]: unknown;
  }
}

declare module 'ember-strict-application-resolver' {
  import type Application from '@ember/application';

  export default class EmberApp extends Application {
    modules: Record<string, unknown>;
  }
}

declare module 'pretender' {
  export default class Pretender {
    constructor(callback?: () => void);
    get(path: string, handler: (request: unknown) => [number, Record<string, string>, string]): void;
    put(path: string, handler: (request: unknown) => [number, Record<string, string>, string]): void;
    post(path: string, handler: (request: unknown) => [number, Record<string, string>, string]): void;
    delete(path: string, handler: (request: unknown) => [number, Record<string, string>, string]): void;
    shutdown(): void;
  }
}
