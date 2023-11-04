import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
/** An editor [[`plugin`]] to do massage binding subscription */
export default class SubscriberPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    sinkIedFilter: string;
    srcIedFilter: string;
    srcCBName: string;
    get ieds(): Element[];
    get gseControls(): Element[];
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
