import { SdsTabPanel } from '../sds-tab-panel/sds-tab-panel';
import { SdsTab } from '../sds-tab/sds-tab';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import { Component, Host, h, Method, Listen, Event, EventEmitter } from '@stencil/core';
import { SdsTabCustomEvent } from 'src/components';
import { getSlotComponents } from 'src/utils/slot-helpers';

@Component({
  tag: 'sds-tabs',
  styleUrl: 'sds-tabs.scss',
  shadow: true,
})
export class SdsTabs {
  tabGroupRef!: SlTabGroup;
  tabSlotRef!: HTMLSlotElement;
  tabPanelSlotRef!: HTMLSlotElement;

  /**
   * Show tab by panel id
   */
  @Method()
  async show(panelId: string, skipEmit = false) {
    this.getTabComponents().forEach(tab => {
      tab.active = tab.panelId === panelId;
    });
    this.getTabPanelComponents().forEach(tabPanel => {
      tabPanel.active = tabPanel.panelId === panelId;
    });

    if (!skipEmit) {
      this.selected.emit({ panelId });
    }
  }

  getTabComponents() {
    return getSlotComponents<SdsTab>({ slot: this.tabSlotRef, tagName: 'sds-tab' });
  }

  getTabPanelComponents() {
    return getSlotComponents<SdsTabPanel>({ slot: this.tabPanelSlotRef, tagName: 'sds-tab-panel' });
  }

  @Listen('sds-tab-click')
  handleClick(e: SdsTabCustomEvent<{ panelId: string }>) {
    this.show(e.detail.panelId);
  }

  @Listen('sds-tab-next')
  handleNext(e: SdsTabCustomEvent<{ panelId: string }>) {
    const tabs = this.getTabComponents();
    const currentIndex = tabs.findIndex(item => item.panelId === e.detail.panelId);
    const nextIndex = (currentIndex + 1) % tabs.length;
    const nextTab = tabs[nextIndex];
    const nextPanelId = nextTab?.panelId;
    if (nextPanelId) {
      this.show(nextPanelId);
      nextTab.focus();
    }
  }

  @Listen('sds-tab-previous')
  handlePrevious(e: SdsTabCustomEvent<{ panelId: string }>) {
    const tabs = this.getTabComponents();
    const currentIndex = tabs.findIndex(item => item.panelId === e.detail.panelId);
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    const previousTab = tabs[previousIndex];
    const previousPanelId = previousTab?.panelId;
    if (previousPanelId) {
      this.show(previousPanelId);
      previousTab.focus();
    }
  }

  componentDidLoad() {
    const tabItems = this.getTabComponents();
    const activeTab = tabItems.find(item => item.active) || tabItems[0];
    if (activeTab?.panelId) {
      this.show(activeTab.panelId, true);
    }
  }

  /**
   * Event emitted a tab is selected
   */
  @Event({
    eventName: 'sds-tabs-selected',
  })
  selected!: EventEmitter<{ panelId: string }>;

  render() {
    return (
      <Host>
        <sl-tab-group ref={(el: SlTabGroup) => (this.tabGroupRef = el)}>
          <slot name="nav" slot="nav" ref={el => (this.tabSlotRef = el as HTMLSlotElement)}></slot>
          <slot ref={el => (this.tabPanelSlotRef = el as HTMLSlotElement)}></slot>
        </sl-tab-group>
      </Host>
    );
  }
}
