// See example https://github.com/epoberezkin/ajv/blob/master/lib/ajv.d.ts

declare var nodeTemplate: {
  run(...args: Array<any>): Promise<string>;
}

export = nodeTemplate
