import FlowTreeBuilder, {
    createFlowTreeModifier as createFlowTreeModifierFromBuilder,

    ABSTRACTION_LEVELS,
    MODIFIER_PRESETS,
    DEFINED_MODIFIERS
} from './src/builder/FlowTreeBuilder';
import SVGRender, { ShapesTreeEditor } from './src/render/svg/SVGRender';
import PresentationGenerator from './src/presentation-generator/PresentationGenerator';
import { TOKEN_TYPES, MODIFIED_TYPES } from './src/shared/constants';

export const createFlowTreeBuilder = FlowTreeBuilder;
export const createFlowTreeModifier = createFlowTreeModifierFromBuilder;

export const createSVGRender = SVGRender;
export const createShapesTreeEditor = ShapesTreeEditor;

export const createPresentationGenerator = PresentationGenerator;

export { ABSTRACTION_LEVELS, DEFINED_MODIFIERS, MODIFIER_PRESETS, TOKEN_TYPES, MODIFIED_TYPES };

export const convertCodeToSvg = (code, printConfig) => convertFlowTreeToSvg(convertCodeToFlowTree(code), printConfig);

export const convertCodeToFlowTree = (code) => {
    const flowTreeBuilder = createFlowTreeBuilder();

    return flowTreeBuilder.build(code);
};

export const convertFlowTreeToSvg = (flowTree, printConfig) => {
    const svgRender = createSVGRender();

    const shapesTree = svgRender.buildShapesTree(flowTree);

    return shapesTree.print(printConfig);
};
