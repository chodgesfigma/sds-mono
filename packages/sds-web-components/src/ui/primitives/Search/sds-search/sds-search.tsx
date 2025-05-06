import { SdsLabelFunctional } from '../../Fieldset/sds-label/sds-label-functional';
import { SdsInputFunctional } from '../../Temp-Input/sds-input/sds-input-functional';
import { SlMenuItem } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sds-search',
  styleUrl: 'sds-search.scss',
  shadow: true,
})
export class SdsSearch {
  inputRef!: HTMLInputElement;

  @State() searchTerm = '';

  /**
   * Label for the search input (hidden)
   */
  @Prop() ariaLabel = 'Search';

  /**
   * Sets the default value for the input
   */
  @Prop() defaultValue = '';

  /**
   * Disables the search
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Placeholder text for the search
   */
  @Prop() placeholder = '';

  /**
   * Results to be shown below input
   */
  @Prop() results?: string[];

  /**
   * Emitted when search input changes
   */
  @Event({
    eventName: 'sds-search',
  })
  search!: EventEmitter<{ searchTerm: string }>;

  onInput = () => {
    const search = this.inputRef.value;

    this.search.emit({ searchTerm: search });
    this.searchTerm = search;
  };

  clearInput = () => {
    const clearedSearch = '';

    this.searchTerm = clearedSearch;
    this.search.emit({ searchTerm: clearedSearch });
    this.inputRef.value = clearedSearch;
  };

  handleSelect = (e: CustomEvent<{ item: SlMenuItem }>) => {
    const search = e.detail.item.value ?? '';
    this.searchTerm = search;
    this.search.emit({ searchTerm: search });
    this.inputRef.value = search;
  };

  render() {
    return (
      <sl-popup active placement="bottom-start" distance="8" class="search-popup">
        <div class="search-input-container" slot="anchor">
          <SdsLabelFunctional hidden htmlFor="search">
            {this.ariaLabel}
          </SdsLabelFunctional>
          <SdsInputFunctional
            autoComplete="off"
            id="search"
            onInput={this.onInput}
            type="search"
            class="search-input"
            value={this.searchTerm}
            ref={el => (this.inputRef = el as HTMLInputElement)}
            placeholder={this.placeholder}
            disabled={this.disabled}
            defaultValue={this.defaultValue}
          />
          <span class="search-icon">
            {this.searchTerm ? (
              <sds-icon-button ariaLabel="Clear search" onClick={() => this.clearInput()} size="small" variant="subtle">
                <sds-icon-x size="14" />
              </sds-icon-button>
            ) : (
              <sds-icon-button ariaLabel="Clear search" onClick={() => this.inputRef.focus()} size="small" variant="subtle">
                <sds-icon-search size="14" />
              </sds-icon-button>
            )}
          </span>
        </div>
        {this.results && this.results.length > 0 && (
          <sds-list-box class="results" onSds-select={this.handleSelect}>
            {this.results?.map(searchResult => (
              <sds-list-box-item key={searchResult} value={searchResult}>
                {searchResult}
              </sds-list-box-item>
            ))}
          </sds-list-box>
        )}
      </sl-popup>
    );
  }
}
