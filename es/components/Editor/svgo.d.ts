export interface SvgoConfig {
    addAttributesToSVGElement?: any;
    cleanupAttrs?: any;
    cleanupEnableBackground?: any;
    cleanupIDs?: any;
    cleanupNumericValues?: any;
    collapseGroups?: any;
    convertColors?: any;
    convertPathData?: any;
    convertShapeToPath?: any;
    convertStyleToAttrs?: any;
    convertTransform?: any;
    mergePaths?: any;
    moveElemsAttrsToGroup?: any;
    moveGroupAttrsToElems?: any;
    removeAttrs?: any;
    removeComments?: any;
    removeDesc?: any;
    removeDimensions?: any;
    removeDoctype?: any;
    removeEditorsNSData?: any;
    removeEmptyAttrs?: any;
    removeEmptyContainers?: any;
    removeEmptyText?: any;
    removeHiddenElems?: any;
    removeMetadata?: any;
    removeNonInheritableGroupAttrs?: any;
    removeRasterImages?: any;
    removeTitle?: any;
    removeUnknownsAndDefaults?: any;
    removeUnusedNS?: any;
    removeUselessDefs?: any;
    removeUselessStrokeAndFill?: any;
    removeViewBox?: any;
    removeXMLProcInst?: any;
    sortAttrs?: any;
}
export declare const defaultPlugins: {
    cleanupAttrs: boolean;
    cleanupEnableBackground: boolean;
    cleanupIDs: boolean;
    cleanupNumericValues: boolean;
    collapseGroups: boolean;
    convertColors: boolean;
    convertPathData: boolean;
    convertShapeToPath: boolean;
    convertStyleToAttrs: boolean;
    convertTransform: boolean;
    mergePaths: boolean;
    moveGroupAttrsToElems: boolean;
    removeComments: boolean;
    removeDesc: boolean;
    removeDimensions: boolean;
    removeDoctype: boolean;
    removeEditorsNSData: boolean;
    removeEmptyAttrs: boolean;
    removeEmptyContainers: boolean;
    removeEmptyText: boolean;
    removeHiddenElems: boolean;
    removeMetadata: boolean;
    removeNonInheritableGroupAttrs: boolean;
    removeRasterImages: boolean;
    removeTitle: boolean;
    removeUnknownsAndDefaults: boolean;
    removeUnusedNS: boolean;
    removeUselessDefs: boolean;
    removeUselessStrokeAndFill: boolean;
    removeViewBox: boolean;
    removeXMLProcInst: boolean;
    sortAttrs: boolean;
};
export default class SVGO {
    app: any;
    constructor(config?: SvgoConfig);
    optimize(svgData: string): Promise<any>;
}
