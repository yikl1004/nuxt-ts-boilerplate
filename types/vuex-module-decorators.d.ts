export function Action(targetOrParams?: any, key?: any, descriptor?: any): any;
export function Module(modOrOpt: any): any;
export function Mutation(target: any, key: any, descriptor: any): void;
export function MutationAction(paramsOrTarget: any, key: any, descriptor: any): any;
export class VuexModule {
    constructor(module: any);
    actions: any;
    mutations: any;
    state: any;
    getters: any;
    namespaced: any;
    modules: any;
}
export function getModule(moduleClass: any, store?: any): any;
