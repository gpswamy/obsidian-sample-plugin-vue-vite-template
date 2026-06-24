import { ItemView, WorkspaceLeaf } from "obsidian";
import { createApp, type App as VueApp } from "vue";
import VueComponent from "./components/VueComponent.vue";

export const HOME_VIEW_TYPE = "home-view";

export class HomeView extends ItemView {
	// Assigned in onOpen() which is always called before onClose() by Obsidian
	private vueApp!: VueApp;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return HOME_VIEW_TYPE;
	}

	getDisplayText(): string {
		return "Home";
	}

	getIcon(): string {
		return "dice";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		this.vueApp = createApp(VueComponent);
		this.vueApp.mount(container);
	}

	async onClose() {
		if (this.vueApp) {
			this.vueApp.unmount();
		}
	}
}
