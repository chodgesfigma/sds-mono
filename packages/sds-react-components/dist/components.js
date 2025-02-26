'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { SdsAccordionItem as SdsAccordionItemElement, defineCustomElement as defineSdsAccordionItem } from "sds-web-components/dist/components/sds-accordion-item.js";
import { SdsAccordion as SdsAccordionElement, defineCustomElement as defineSdsAccordion } from "sds-web-components/dist/components/sds-accordion.js";
import { SdsButtonDanger as SdsButtonDangerElement, defineCustomElement as defineSdsButtonDanger } from "sds-web-components/dist/components/sds-button-danger.js";
import { SdsButtonGroup as SdsButtonGroupElement, defineCustomElement as defineSdsButtonGroup } from "sds-web-components/dist/components/sds-button-group.js";
import { SdsButton as SdsButtonElement, defineCustomElement as defineSdsButton } from "sds-web-components/dist/components/sds-button.js";
import { SdsDescription as SdsDescriptionElement, defineCustomElement as defineSdsDescription } from "sds-web-components/dist/components/sds-description.js";
import { SdsFieldError as SdsFieldErrorElement, defineCustomElement as defineSdsFieldError } from "sds-web-components/dist/components/sds-field-error.js";
import { SdsFieldGroup as SdsFieldGroupElement, defineCustomElement as defineSdsFieldGroup } from "sds-web-components/dist/components/sds-field-group.js";
import { SdsField as SdsFieldElement, defineCustomElement as defineSdsField } from "sds-web-components/dist/components/sds-field.js";
import { SdsFieldset as SdsFieldsetElement, defineCustomElement as defineSdsFieldset } from "sds-web-components/dist/components/sds-fieldset.js";
import { SdsFlexItem as SdsFlexItemElement, defineCustomElement as defineSdsFlexItem } from "sds-web-components/dist/components/sds-flex-item.js";
import { SdsFlex as SdsFlexElement, defineCustomElement as defineSdsFlex } from "sds-web-components/dist/components/sds-flex.js";
import { SdsForm as SdsFormElement, defineCustomElement as defineSdsForm } from "sds-web-components/dist/components/sds-form.js";
import { SdsIconActivity as SdsIconActivityElement, defineCustomElement as defineSdsIconActivity } from "sds-web-components/dist/components/sds-icon-activity.js";
import { SdsIconAirplay as SdsIconAirplayElement, defineCustomElement as defineSdsIconAirplay } from "sds-web-components/dist/components/sds-icon-airplay.js";
import { SdsIconAlertCircle as SdsIconAlertCircleElement, defineCustomElement as defineSdsIconAlertCircle } from "sds-web-components/dist/components/sds-icon-alert-circle.js";
import { SdsIconAlertOctagon as SdsIconAlertOctagonElement, defineCustomElement as defineSdsIconAlertOctagon } from "sds-web-components/dist/components/sds-icon-alert-octagon.js";
import { SdsIconAlertTriangle as SdsIconAlertTriangleElement, defineCustomElement as defineSdsIconAlertTriangle } from "sds-web-components/dist/components/sds-icon-alert-triangle.js";
import { SdsIconAlignCenter as SdsIconAlignCenterElement, defineCustomElement as defineSdsIconAlignCenter } from "sds-web-components/dist/components/sds-icon-align-center.js";
import { SdsIconAlignJustify as SdsIconAlignJustifyElement, defineCustomElement as defineSdsIconAlignJustify } from "sds-web-components/dist/components/sds-icon-align-justify.js";
import { SdsIconAlignLeft as SdsIconAlignLeftElement, defineCustomElement as defineSdsIconAlignLeft } from "sds-web-components/dist/components/sds-icon-align-left.js";
import { SdsIconAlignRight as SdsIconAlignRightElement, defineCustomElement as defineSdsIconAlignRight } from "sds-web-components/dist/components/sds-icon-align-right.js";
import { SdsIconAnchor as SdsIconAnchorElement, defineCustomElement as defineSdsIconAnchor } from "sds-web-components/dist/components/sds-icon-anchor.js";
import { SdsIconAperture as SdsIconApertureElement, defineCustomElement as defineSdsIconAperture } from "sds-web-components/dist/components/sds-icon-aperture.js";
import { SdsIconArchive as SdsIconArchiveElement, defineCustomElement as defineSdsIconArchive } from "sds-web-components/dist/components/sds-icon-archive.js";
import { SdsIconArrowDownCircle as SdsIconArrowDownCircleElement, defineCustomElement as defineSdsIconArrowDownCircle } from "sds-web-components/dist/components/sds-icon-arrow-down-circle.js";
import { SdsIconArrowDownLeft as SdsIconArrowDownLeftElement, defineCustomElement as defineSdsIconArrowDownLeft } from "sds-web-components/dist/components/sds-icon-arrow-down-left.js";
import { SdsIconArrowDownRight as SdsIconArrowDownRightElement, defineCustomElement as defineSdsIconArrowDownRight } from "sds-web-components/dist/components/sds-icon-arrow-down-right.js";
import { SdsIconArrowDown as SdsIconArrowDownElement, defineCustomElement as defineSdsIconArrowDown } from "sds-web-components/dist/components/sds-icon-arrow-down.js";
import { SdsIconArrowLeftCircle as SdsIconArrowLeftCircleElement, defineCustomElement as defineSdsIconArrowLeftCircle } from "sds-web-components/dist/components/sds-icon-arrow-left-circle.js";
import { SdsIconArrowLeft as SdsIconArrowLeftElement, defineCustomElement as defineSdsIconArrowLeft } from "sds-web-components/dist/components/sds-icon-arrow-left.js";
import { SdsIconArrowRightCircle as SdsIconArrowRightCircleElement, defineCustomElement as defineSdsIconArrowRightCircle } from "sds-web-components/dist/components/sds-icon-arrow-right-circle.js";
import { SdsIconArrowRight as SdsIconArrowRightElement, defineCustomElement as defineSdsIconArrowRight } from "sds-web-components/dist/components/sds-icon-arrow-right.js";
import { SdsIconArrowUpCircle as SdsIconArrowUpCircleElement, defineCustomElement as defineSdsIconArrowUpCircle } from "sds-web-components/dist/components/sds-icon-arrow-up-circle.js";
import { SdsIconArrowUpLeft as SdsIconArrowUpLeftElement, defineCustomElement as defineSdsIconArrowUpLeft } from "sds-web-components/dist/components/sds-icon-arrow-up-left.js";
import { SdsIconArrowUpRight as SdsIconArrowUpRightElement, defineCustomElement as defineSdsIconArrowUpRight } from "sds-web-components/dist/components/sds-icon-arrow-up-right.js";
import { SdsIconArrowUp as SdsIconArrowUpElement, defineCustomElement as defineSdsIconArrowUp } from "sds-web-components/dist/components/sds-icon-arrow-up.js";
import { SdsIconAtSign as SdsIconAtSignElement, defineCustomElement as defineSdsIconAtSign } from "sds-web-components/dist/components/sds-icon-at-sign.js";
import { SdsIconAward as SdsIconAwardElement, defineCustomElement as defineSdsIconAward } from "sds-web-components/dist/components/sds-icon-award.js";
import { SdsIconBarChart2 as SdsIconBarChart2Element, defineCustomElement as defineSdsIconBarChart2 } from "sds-web-components/dist/components/sds-icon-bar-chart-2.js";
import { SdsIconBarChart as SdsIconBarChartElement, defineCustomElement as defineSdsIconBarChart } from "sds-web-components/dist/components/sds-icon-bar-chart.js";
import { SdsIconBatteryCharging as SdsIconBatteryChargingElement, defineCustomElement as defineSdsIconBatteryCharging } from "sds-web-components/dist/components/sds-icon-battery-charging.js";
import { SdsIconBattery as SdsIconBatteryElement, defineCustomElement as defineSdsIconBattery } from "sds-web-components/dist/components/sds-icon-battery.js";
import { SdsIconBellOff as SdsIconBellOffElement, defineCustomElement as defineSdsIconBellOff } from "sds-web-components/dist/components/sds-icon-bell-off.js";
import { SdsIconBell as SdsIconBellElement, defineCustomElement as defineSdsIconBell } from "sds-web-components/dist/components/sds-icon-bell.js";
import { SdsIconBluetooth as SdsIconBluetoothElement, defineCustomElement as defineSdsIconBluetooth } from "sds-web-components/dist/components/sds-icon-bluetooth.js";
import { SdsIconBold as SdsIconBoldElement, defineCustomElement as defineSdsIconBold } from "sds-web-components/dist/components/sds-icon-bold.js";
import { SdsIconBookOpen as SdsIconBookOpenElement, defineCustomElement as defineSdsIconBookOpen } from "sds-web-components/dist/components/sds-icon-book-open.js";
import { SdsIconBook as SdsIconBookElement, defineCustomElement as defineSdsIconBook } from "sds-web-components/dist/components/sds-icon-book.js";
import { SdsIconBookmark as SdsIconBookmarkElement, defineCustomElement as defineSdsIconBookmark } from "sds-web-components/dist/components/sds-icon-bookmark.js";
import { SdsIconBox as SdsIconBoxElement, defineCustomElement as defineSdsIconBox } from "sds-web-components/dist/components/sds-icon-box.js";
import { SdsIconBriefcase as SdsIconBriefcaseElement, defineCustomElement as defineSdsIconBriefcase } from "sds-web-components/dist/components/sds-icon-briefcase.js";
import { SdsIconCalendar as SdsIconCalendarElement, defineCustomElement as defineSdsIconCalendar } from "sds-web-components/dist/components/sds-icon-calendar.js";
import { SdsIconCameraOff as SdsIconCameraOffElement, defineCustomElement as defineSdsIconCameraOff } from "sds-web-components/dist/components/sds-icon-camera-off.js";
import { SdsIconCamera as SdsIconCameraElement, defineCustomElement as defineSdsIconCamera } from "sds-web-components/dist/components/sds-icon-camera.js";
import { SdsIconCast as SdsIconCastElement, defineCustomElement as defineSdsIconCast } from "sds-web-components/dist/components/sds-icon-cast.js";
import { SdsIconCheckCircle as SdsIconCheckCircleElement, defineCustomElement as defineSdsIconCheckCircle } from "sds-web-components/dist/components/sds-icon-check-circle.js";
import { SdsIconCheckSquare as SdsIconCheckSquareElement, defineCustomElement as defineSdsIconCheckSquare } from "sds-web-components/dist/components/sds-icon-check-square.js";
import { SdsIconCheck as SdsIconCheckElement, defineCustomElement as defineSdsIconCheck } from "sds-web-components/dist/components/sds-icon-check.js";
import { SdsIconChevronDown as SdsIconChevronDownElement, defineCustomElement as defineSdsIconChevronDown } from "sds-web-components/dist/components/sds-icon-chevron-down.js";
import { SdsIconChevronLeft as SdsIconChevronLeftElement, defineCustomElement as defineSdsIconChevronLeft } from "sds-web-components/dist/components/sds-icon-chevron-left.js";
import { SdsIconChevronRight as SdsIconChevronRightElement, defineCustomElement as defineSdsIconChevronRight } from "sds-web-components/dist/components/sds-icon-chevron-right.js";
import { SdsIconChevronUp as SdsIconChevronUpElement, defineCustomElement as defineSdsIconChevronUp } from "sds-web-components/dist/components/sds-icon-chevron-up.js";
import { SdsIconChevronsDown as SdsIconChevronsDownElement, defineCustomElement as defineSdsIconChevronsDown } from "sds-web-components/dist/components/sds-icon-chevrons-down.js";
import { SdsIconChevronsLeft as SdsIconChevronsLeftElement, defineCustomElement as defineSdsIconChevronsLeft } from "sds-web-components/dist/components/sds-icon-chevrons-left.js";
import { SdsIconChevronsRight as SdsIconChevronsRightElement, defineCustomElement as defineSdsIconChevronsRight } from "sds-web-components/dist/components/sds-icon-chevrons-right.js";
import { SdsIconChevronsUp as SdsIconChevronsUpElement, defineCustomElement as defineSdsIconChevronsUp } from "sds-web-components/dist/components/sds-icon-chevrons-up.js";
import { SdsIconChrome as SdsIconChromeElement, defineCustomElement as defineSdsIconChrome } from "sds-web-components/dist/components/sds-icon-chrome.js";
import { SdsIconCircle as SdsIconCircleElement, defineCustomElement as defineSdsIconCircle } from "sds-web-components/dist/components/sds-icon-circle.js";
import { SdsIconClipboard as SdsIconClipboardElement, defineCustomElement as defineSdsIconClipboard } from "sds-web-components/dist/components/sds-icon-clipboard.js";
import { SdsIconClock as SdsIconClockElement, defineCustomElement as defineSdsIconClock } from "sds-web-components/dist/components/sds-icon-clock.js";
import { SdsIconCloudDrizzle as SdsIconCloudDrizzleElement, defineCustomElement as defineSdsIconCloudDrizzle } from "sds-web-components/dist/components/sds-icon-cloud-drizzle.js";
import { SdsIconCloudLightning as SdsIconCloudLightningElement, defineCustomElement as defineSdsIconCloudLightning } from "sds-web-components/dist/components/sds-icon-cloud-lightning.js";
import { SdsIconCloudOff as SdsIconCloudOffElement, defineCustomElement as defineSdsIconCloudOff } from "sds-web-components/dist/components/sds-icon-cloud-off.js";
import { SdsIconCloudRain as SdsIconCloudRainElement, defineCustomElement as defineSdsIconCloudRain } from "sds-web-components/dist/components/sds-icon-cloud-rain.js";
import { SdsIconCloudSnow as SdsIconCloudSnowElement, defineCustomElement as defineSdsIconCloudSnow } from "sds-web-components/dist/components/sds-icon-cloud-snow.js";
import { SdsIconCloud as SdsIconCloudElement, defineCustomElement as defineSdsIconCloud } from "sds-web-components/dist/components/sds-icon-cloud.js";
import { SdsIconCode as SdsIconCodeElement, defineCustomElement as defineSdsIconCode } from "sds-web-components/dist/components/sds-icon-code.js";
import { SdsIconCodepen as SdsIconCodepenElement, defineCustomElement as defineSdsIconCodepen } from "sds-web-components/dist/components/sds-icon-codepen.js";
import { SdsIconCodesandbox as SdsIconCodesandboxElement, defineCustomElement as defineSdsIconCodesandbox } from "sds-web-components/dist/components/sds-icon-codesandbox.js";
import { SdsIconCoffee as SdsIconCoffeeElement, defineCustomElement as defineSdsIconCoffee } from "sds-web-components/dist/components/sds-icon-coffee.js";
import { SdsIconColumns as SdsIconColumnsElement, defineCustomElement as defineSdsIconColumns } from "sds-web-components/dist/components/sds-icon-columns.js";
import { SdsIconCommand as SdsIconCommandElement, defineCustomElement as defineSdsIconCommand } from "sds-web-components/dist/components/sds-icon-command.js";
import { SdsIconCompass as SdsIconCompassElement, defineCustomElement as defineSdsIconCompass } from "sds-web-components/dist/components/sds-icon-compass.js";
import { SdsIconCopy as SdsIconCopyElement, defineCustomElement as defineSdsIconCopy } from "sds-web-components/dist/components/sds-icon-copy.js";
import { SdsIconCornerDownLeft as SdsIconCornerDownLeftElement, defineCustomElement as defineSdsIconCornerDownLeft } from "sds-web-components/dist/components/sds-icon-corner-down-left.js";
import { SdsIconCornerDownRight as SdsIconCornerDownRightElement, defineCustomElement as defineSdsIconCornerDownRight } from "sds-web-components/dist/components/sds-icon-corner-down-right.js";
import { SdsIconCornerLeftDown as SdsIconCornerLeftDownElement, defineCustomElement as defineSdsIconCornerLeftDown } from "sds-web-components/dist/components/sds-icon-corner-left-down.js";
import { SdsIconCornerLeftUp as SdsIconCornerLeftUpElement, defineCustomElement as defineSdsIconCornerLeftUp } from "sds-web-components/dist/components/sds-icon-corner-left-up.js";
import { SdsIconCornerRightDown as SdsIconCornerRightDownElement, defineCustomElement as defineSdsIconCornerRightDown } from "sds-web-components/dist/components/sds-icon-corner-right-down.js";
import { SdsIconCornerRightUp as SdsIconCornerRightUpElement, defineCustomElement as defineSdsIconCornerRightUp } from "sds-web-components/dist/components/sds-icon-corner-right-up.js";
import { SdsIconCornerUpLeft as SdsIconCornerUpLeftElement, defineCustomElement as defineSdsIconCornerUpLeft } from "sds-web-components/dist/components/sds-icon-corner-up-left.js";
import { SdsIconCornerUpRight as SdsIconCornerUpRightElement, defineCustomElement as defineSdsIconCornerUpRight } from "sds-web-components/dist/components/sds-icon-corner-up-right.js";
import { SdsIconCpu as SdsIconCpuElement, defineCustomElement as defineSdsIconCpu } from "sds-web-components/dist/components/sds-icon-cpu.js";
import { SdsIconCreditCard as SdsIconCreditCardElement, defineCustomElement as defineSdsIconCreditCard } from "sds-web-components/dist/components/sds-icon-credit-card.js";
import { SdsIconCrop as SdsIconCropElement, defineCustomElement as defineSdsIconCrop } from "sds-web-components/dist/components/sds-icon-crop.js";
import { SdsIconCrosshair as SdsIconCrosshairElement, defineCustomElement as defineSdsIconCrosshair } from "sds-web-components/dist/components/sds-icon-crosshair.js";
import { SdsIconDatabase as SdsIconDatabaseElement, defineCustomElement as defineSdsIconDatabase } from "sds-web-components/dist/components/sds-icon-database.js";
import { SdsIconDelete as SdsIconDeleteElement, defineCustomElement as defineSdsIconDelete } from "sds-web-components/dist/components/sds-icon-delete.js";
import { SdsIconDisc as SdsIconDiscElement, defineCustomElement as defineSdsIconDisc } from "sds-web-components/dist/components/sds-icon-disc.js";
import { SdsIconDivideCircle as SdsIconDivideCircleElement, defineCustomElement as defineSdsIconDivideCircle } from "sds-web-components/dist/components/sds-icon-divide-circle.js";
import { SdsIconDivideSquare as SdsIconDivideSquareElement, defineCustomElement as defineSdsIconDivideSquare } from "sds-web-components/dist/components/sds-icon-divide-square.js";
import { SdsIconDivide as SdsIconDivideElement, defineCustomElement as defineSdsIconDivide } from "sds-web-components/dist/components/sds-icon-divide.js";
import { SdsIconDollarSign as SdsIconDollarSignElement, defineCustomElement as defineSdsIconDollarSign } from "sds-web-components/dist/components/sds-icon-dollar-sign.js";
import { SdsIconDownloadCloud as SdsIconDownloadCloudElement, defineCustomElement as defineSdsIconDownloadCloud } from "sds-web-components/dist/components/sds-icon-download-cloud.js";
import { SdsIconDownload as SdsIconDownloadElement, defineCustomElement as defineSdsIconDownload } from "sds-web-components/dist/components/sds-icon-download.js";
import { SdsIconDribbble as SdsIconDribbbleElement, defineCustomElement as defineSdsIconDribbble } from "sds-web-components/dist/components/sds-icon-dribbble.js";
import { SdsIconDroplet as SdsIconDropletElement, defineCustomElement as defineSdsIconDroplet } from "sds-web-components/dist/components/sds-icon-droplet.js";
import { SdsIconEdit2 as SdsIconEdit2Element, defineCustomElement as defineSdsIconEdit2 } from "sds-web-components/dist/components/sds-icon-edit-2.js";
import { SdsIconEdit3 as SdsIconEdit3Element, defineCustomElement as defineSdsIconEdit3 } from "sds-web-components/dist/components/sds-icon-edit-3.js";
import { SdsIconEdit as SdsIconEditElement, defineCustomElement as defineSdsIconEdit } from "sds-web-components/dist/components/sds-icon-edit.js";
import { SdsIconExternalLink as SdsIconExternalLinkElement, defineCustomElement as defineSdsIconExternalLink } from "sds-web-components/dist/components/sds-icon-external-link.js";
import { SdsIconEyeOff as SdsIconEyeOffElement, defineCustomElement as defineSdsIconEyeOff } from "sds-web-components/dist/components/sds-icon-eye-off.js";
import { SdsIconEye as SdsIconEyeElement, defineCustomElement as defineSdsIconEye } from "sds-web-components/dist/components/sds-icon-eye.js";
import { SdsIconFacebook as SdsIconFacebookElement, defineCustomElement as defineSdsIconFacebook } from "sds-web-components/dist/components/sds-icon-facebook.js";
import { SdsIconFastForward as SdsIconFastForwardElement, defineCustomElement as defineSdsIconFastForward } from "sds-web-components/dist/components/sds-icon-fast-forward.js";
import { SdsIconFeather as SdsIconFeatherElement, defineCustomElement as defineSdsIconFeather } from "sds-web-components/dist/components/sds-icon-feather.js";
import { SdsIconFigma as SdsIconFigmaElement, defineCustomElement as defineSdsIconFigma } from "sds-web-components/dist/components/sds-icon-figma.js";
import { SdsIconFileMinus as SdsIconFileMinusElement, defineCustomElement as defineSdsIconFileMinus } from "sds-web-components/dist/components/sds-icon-file-minus.js";
import { SdsIconFilePlus as SdsIconFilePlusElement, defineCustomElement as defineSdsIconFilePlus } from "sds-web-components/dist/components/sds-icon-file-plus.js";
import { SdsIconFileText as SdsIconFileTextElement, defineCustomElement as defineSdsIconFileText } from "sds-web-components/dist/components/sds-icon-file-text.js";
import { SdsIconFile as SdsIconFileElement, defineCustomElement as defineSdsIconFile } from "sds-web-components/dist/components/sds-icon-file.js";
import { SdsIconFilm as SdsIconFilmElement, defineCustomElement as defineSdsIconFilm } from "sds-web-components/dist/components/sds-icon-film.js";
import { SdsIconFilter as SdsIconFilterElement, defineCustomElement as defineSdsIconFilter } from "sds-web-components/dist/components/sds-icon-filter.js";
import { SdsIconFlag as SdsIconFlagElement, defineCustomElement as defineSdsIconFlag } from "sds-web-components/dist/components/sds-icon-flag.js";
import { SdsIconFolderMinus as SdsIconFolderMinusElement, defineCustomElement as defineSdsIconFolderMinus } from "sds-web-components/dist/components/sds-icon-folder-minus.js";
import { SdsIconFolderPlus as SdsIconFolderPlusElement, defineCustomElement as defineSdsIconFolderPlus } from "sds-web-components/dist/components/sds-icon-folder-plus.js";
import { SdsIconFolder as SdsIconFolderElement, defineCustomElement as defineSdsIconFolder } from "sds-web-components/dist/components/sds-icon-folder.js";
import { SdsIconFramer as SdsIconFramerElement, defineCustomElement as defineSdsIconFramer } from "sds-web-components/dist/components/sds-icon-framer.js";
import { SdsIconFrown as SdsIconFrownElement, defineCustomElement as defineSdsIconFrown } from "sds-web-components/dist/components/sds-icon-frown.js";
import { SdsIconGift as SdsIconGiftElement, defineCustomElement as defineSdsIconGift } from "sds-web-components/dist/components/sds-icon-gift.js";
import { SdsIconGitBranch as SdsIconGitBranchElement, defineCustomElement as defineSdsIconGitBranch } from "sds-web-components/dist/components/sds-icon-git-branch.js";
import { SdsIconGitCommit as SdsIconGitCommitElement, defineCustomElement as defineSdsIconGitCommit } from "sds-web-components/dist/components/sds-icon-git-commit.js";
import { SdsIconGitMerge as SdsIconGitMergeElement, defineCustomElement as defineSdsIconGitMerge } from "sds-web-components/dist/components/sds-icon-git-merge.js";
import { SdsIconGitPullRequest as SdsIconGitPullRequestElement, defineCustomElement as defineSdsIconGitPullRequest } from "sds-web-components/dist/components/sds-icon-git-pull-request.js";
import { SdsIconGithub as SdsIconGithubElement, defineCustomElement as defineSdsIconGithub } from "sds-web-components/dist/components/sds-icon-github.js";
import { SdsIconGitlab as SdsIconGitlabElement, defineCustomElement as defineSdsIconGitlab } from "sds-web-components/dist/components/sds-icon-gitlab.js";
import { SdsIconGlobe as SdsIconGlobeElement, defineCustomElement as defineSdsIconGlobe } from "sds-web-components/dist/components/sds-icon-globe.js";
import { SdsIconGrid as SdsIconGridElement, defineCustomElement as defineSdsIconGrid } from "sds-web-components/dist/components/sds-icon-grid.js";
import { SdsIconHardDrive as SdsIconHardDriveElement, defineCustomElement as defineSdsIconHardDrive } from "sds-web-components/dist/components/sds-icon-hard-drive.js";
import { SdsIconHash as SdsIconHashElement, defineCustomElement as defineSdsIconHash } from "sds-web-components/dist/components/sds-icon-hash.js";
import { SdsIconHeadphones as SdsIconHeadphonesElement, defineCustomElement as defineSdsIconHeadphones } from "sds-web-components/dist/components/sds-icon-headphones.js";
import { SdsIconHeart as SdsIconHeartElement, defineCustomElement as defineSdsIconHeart } from "sds-web-components/dist/components/sds-icon-heart.js";
import { SdsIconHelpCircle as SdsIconHelpCircleElement, defineCustomElement as defineSdsIconHelpCircle } from "sds-web-components/dist/components/sds-icon-help-circle.js";
import { SdsIconHexagon as SdsIconHexagonElement, defineCustomElement as defineSdsIconHexagon } from "sds-web-components/dist/components/sds-icon-hexagon.js";
import { SdsIconHome as SdsIconHomeElement, defineCustomElement as defineSdsIconHome } from "sds-web-components/dist/components/sds-icon-home.js";
import { SdsIconImage as SdsIconImageElement, defineCustomElement as defineSdsIconImage } from "sds-web-components/dist/components/sds-icon-image.js";
import { SdsIconInbox as SdsIconInboxElement, defineCustomElement as defineSdsIconInbox } from "sds-web-components/dist/components/sds-icon-inbox.js";
import { SdsIconInfo as SdsIconInfoElement, defineCustomElement as defineSdsIconInfo } from "sds-web-components/dist/components/sds-icon-info.js";
import { SdsIconInstagram as SdsIconInstagramElement, defineCustomElement as defineSdsIconInstagram } from "sds-web-components/dist/components/sds-icon-instagram.js";
import { SdsIconItalic as SdsIconItalicElement, defineCustomElement as defineSdsIconItalic } from "sds-web-components/dist/components/sds-icon-italic.js";
import { SdsIconKey as SdsIconKeyElement, defineCustomElement as defineSdsIconKey } from "sds-web-components/dist/components/sds-icon-key.js";
import { SdsIconLayers as SdsIconLayersElement, defineCustomElement as defineSdsIconLayers } from "sds-web-components/dist/components/sds-icon-layers.js";
import { SdsIconLayout as SdsIconLayoutElement, defineCustomElement as defineSdsIconLayout } from "sds-web-components/dist/components/sds-icon-layout.js";
import { SdsIconLifeBuoy as SdsIconLifeBuoyElement, defineCustomElement as defineSdsIconLifeBuoy } from "sds-web-components/dist/components/sds-icon-life-buoy.js";
import { SdsIconLink2 as SdsIconLink2Element, defineCustomElement as defineSdsIconLink2 } from "sds-web-components/dist/components/sds-icon-link-2.js";
import { SdsIconLink as SdsIconLinkElement, defineCustomElement as defineSdsIconLink } from "sds-web-components/dist/components/sds-icon-link.js";
import { SdsIconLinkedin as SdsIconLinkedinElement, defineCustomElement as defineSdsIconLinkedin } from "sds-web-components/dist/components/sds-icon-linkedin.js";
import { SdsIconList as SdsIconListElement, defineCustomElement as defineSdsIconList } from "sds-web-components/dist/components/sds-icon-list.js";
import { SdsIconLoader as SdsIconLoaderElement, defineCustomElement as defineSdsIconLoader } from "sds-web-components/dist/components/sds-icon-loader.js";
import { SdsIconLock as SdsIconLockElement, defineCustomElement as defineSdsIconLock } from "sds-web-components/dist/components/sds-icon-lock.js";
import { SdsIconLogIn as SdsIconLogInElement, defineCustomElement as defineSdsIconLogIn } from "sds-web-components/dist/components/sds-icon-log-in.js";
import { SdsIconLogOut as SdsIconLogOutElement, defineCustomElement as defineSdsIconLogOut } from "sds-web-components/dist/components/sds-icon-log-out.js";
import { SdsIconMail as SdsIconMailElement, defineCustomElement as defineSdsIconMail } from "sds-web-components/dist/components/sds-icon-mail.js";
import { SdsIconMapPin as SdsIconMapPinElement, defineCustomElement as defineSdsIconMapPin } from "sds-web-components/dist/components/sds-icon-map-pin.js";
import { SdsIconMap as SdsIconMapElement, defineCustomElement as defineSdsIconMap } from "sds-web-components/dist/components/sds-icon-map.js";
import { SdsIconMaximize2 as SdsIconMaximize2Element, defineCustomElement as defineSdsIconMaximize2 } from "sds-web-components/dist/components/sds-icon-maximize-2.js";
import { SdsIconMaximize as SdsIconMaximizeElement, defineCustomElement as defineSdsIconMaximize } from "sds-web-components/dist/components/sds-icon-maximize.js";
import { SdsIconMeh as SdsIconMehElement, defineCustomElement as defineSdsIconMeh } from "sds-web-components/dist/components/sds-icon-meh.js";
import { SdsIconMenu as SdsIconMenuElement, defineCustomElement as defineSdsIconMenu } from "sds-web-components/dist/components/sds-icon-menu.js";
import { SdsIconMessageCircle as SdsIconMessageCircleElement, defineCustomElement as defineSdsIconMessageCircle } from "sds-web-components/dist/components/sds-icon-message-circle.js";
import { SdsIconMessageSquare as SdsIconMessageSquareElement, defineCustomElement as defineSdsIconMessageSquare } from "sds-web-components/dist/components/sds-icon-message-square.js";
import { SdsIconMicOff as SdsIconMicOffElement, defineCustomElement as defineSdsIconMicOff } from "sds-web-components/dist/components/sds-icon-mic-off.js";
import { SdsIconMic as SdsIconMicElement, defineCustomElement as defineSdsIconMic } from "sds-web-components/dist/components/sds-icon-mic.js";
import { SdsIconMinimize2 as SdsIconMinimize2Element, defineCustomElement as defineSdsIconMinimize2 } from "sds-web-components/dist/components/sds-icon-minimize-2.js";
import { SdsIconMinimize as SdsIconMinimizeElement, defineCustomElement as defineSdsIconMinimize } from "sds-web-components/dist/components/sds-icon-minimize.js";
import { SdsIconMinusCircle as SdsIconMinusCircleElement, defineCustomElement as defineSdsIconMinusCircle } from "sds-web-components/dist/components/sds-icon-minus-circle.js";
import { SdsIconMinusSquare as SdsIconMinusSquareElement, defineCustomElement as defineSdsIconMinusSquare } from "sds-web-components/dist/components/sds-icon-minus-square.js";
import { SdsIconMinus as SdsIconMinusElement, defineCustomElement as defineSdsIconMinus } from "sds-web-components/dist/components/sds-icon-minus.js";
import { SdsIconMonitor as SdsIconMonitorElement, defineCustomElement as defineSdsIconMonitor } from "sds-web-components/dist/components/sds-icon-monitor.js";
import { SdsIconMoon as SdsIconMoonElement, defineCustomElement as defineSdsIconMoon } from "sds-web-components/dist/components/sds-icon-moon.js";
import { SdsIconMoreHorizontal as SdsIconMoreHorizontalElement, defineCustomElement as defineSdsIconMoreHorizontal } from "sds-web-components/dist/components/sds-icon-more-horizontal.js";
import { SdsIconMoreVertical as SdsIconMoreVerticalElement, defineCustomElement as defineSdsIconMoreVertical } from "sds-web-components/dist/components/sds-icon-more-vertical.js";
import { SdsIconMousePointer as SdsIconMousePointerElement, defineCustomElement as defineSdsIconMousePointer } from "sds-web-components/dist/components/sds-icon-mouse-pointer.js";
import { SdsIconMove as SdsIconMoveElement, defineCustomElement as defineSdsIconMove } from "sds-web-components/dist/components/sds-icon-move.js";
import { SdsIconMusic as SdsIconMusicElement, defineCustomElement as defineSdsIconMusic } from "sds-web-components/dist/components/sds-icon-music.js";
import { SdsIconNavigation2 as SdsIconNavigation2Element, defineCustomElement as defineSdsIconNavigation2 } from "sds-web-components/dist/components/sds-icon-navigation-2.js";
import { SdsIconNavigation as SdsIconNavigationElement, defineCustomElement as defineSdsIconNavigation } from "sds-web-components/dist/components/sds-icon-navigation.js";
import { SdsIconOctagon as SdsIconOctagonElement, defineCustomElement as defineSdsIconOctagon } from "sds-web-components/dist/components/sds-icon-octagon.js";
import { SdsIconPackage as SdsIconPackageElement, defineCustomElement as defineSdsIconPackage } from "sds-web-components/dist/components/sds-icon-package.js";
import { SdsIconPaperclip as SdsIconPaperclipElement, defineCustomElement as defineSdsIconPaperclip } from "sds-web-components/dist/components/sds-icon-paperclip.js";
import { SdsIconPauseCircle as SdsIconPauseCircleElement, defineCustomElement as defineSdsIconPauseCircle } from "sds-web-components/dist/components/sds-icon-pause-circle.js";
import { SdsIconPause as SdsIconPauseElement, defineCustomElement as defineSdsIconPause } from "sds-web-components/dist/components/sds-icon-pause.js";
import { SdsIconPenTool as SdsIconPenToolElement, defineCustomElement as defineSdsIconPenTool } from "sds-web-components/dist/components/sds-icon-pen-tool.js";
import { SdsIconPercent as SdsIconPercentElement, defineCustomElement as defineSdsIconPercent } from "sds-web-components/dist/components/sds-icon-percent.js";
import { SdsIconPhoneCall as SdsIconPhoneCallElement, defineCustomElement as defineSdsIconPhoneCall } from "sds-web-components/dist/components/sds-icon-phone-call.js";
import { SdsIconPhoneForwarded as SdsIconPhoneForwardedElement, defineCustomElement as defineSdsIconPhoneForwarded } from "sds-web-components/dist/components/sds-icon-phone-forwarded.js";
import { SdsIconPhoneIncoming as SdsIconPhoneIncomingElement, defineCustomElement as defineSdsIconPhoneIncoming } from "sds-web-components/dist/components/sds-icon-phone-incoming.js";
import { SdsIconPhoneMissed as SdsIconPhoneMissedElement, defineCustomElement as defineSdsIconPhoneMissed } from "sds-web-components/dist/components/sds-icon-phone-missed.js";
import { SdsIconPhoneOff as SdsIconPhoneOffElement, defineCustomElement as defineSdsIconPhoneOff } from "sds-web-components/dist/components/sds-icon-phone-off.js";
import { SdsIconPhoneOutgoing as SdsIconPhoneOutgoingElement, defineCustomElement as defineSdsIconPhoneOutgoing } from "sds-web-components/dist/components/sds-icon-phone-outgoing.js";
import { SdsIconPhone as SdsIconPhoneElement, defineCustomElement as defineSdsIconPhone } from "sds-web-components/dist/components/sds-icon-phone.js";
import { SdsIconPieChart as SdsIconPieChartElement, defineCustomElement as defineSdsIconPieChart } from "sds-web-components/dist/components/sds-icon-pie-chart.js";
import { SdsIconPlayCircle as SdsIconPlayCircleElement, defineCustomElement as defineSdsIconPlayCircle } from "sds-web-components/dist/components/sds-icon-play-circle.js";
import { SdsIconPlay as SdsIconPlayElement, defineCustomElement as defineSdsIconPlay } from "sds-web-components/dist/components/sds-icon-play.js";
import { SdsIconPlusCircle as SdsIconPlusCircleElement, defineCustomElement as defineSdsIconPlusCircle } from "sds-web-components/dist/components/sds-icon-plus-circle.js";
import { SdsIconPlusSquare as SdsIconPlusSquareElement, defineCustomElement as defineSdsIconPlusSquare } from "sds-web-components/dist/components/sds-icon-plus-square.js";
import { SdsIconPlus as SdsIconPlusElement, defineCustomElement as defineSdsIconPlus } from "sds-web-components/dist/components/sds-icon-plus.js";
import { SdsIconPocket as SdsIconPocketElement, defineCustomElement as defineSdsIconPocket } from "sds-web-components/dist/components/sds-icon-pocket.js";
import { SdsIconPower as SdsIconPowerElement, defineCustomElement as defineSdsIconPower } from "sds-web-components/dist/components/sds-icon-power.js";
import { SdsIconPrinter as SdsIconPrinterElement, defineCustomElement as defineSdsIconPrinter } from "sds-web-components/dist/components/sds-icon-printer.js";
import { SdsIconRadio as SdsIconRadioElement, defineCustomElement as defineSdsIconRadio } from "sds-web-components/dist/components/sds-icon-radio.js";
import { SdsIconRefreshCcw as SdsIconRefreshCcwElement, defineCustomElement as defineSdsIconRefreshCcw } from "sds-web-components/dist/components/sds-icon-refresh-ccw.js";
import { SdsIconRefreshCw as SdsIconRefreshCwElement, defineCustomElement as defineSdsIconRefreshCw } from "sds-web-components/dist/components/sds-icon-refresh-cw.js";
import { SdsIconRepeat as SdsIconRepeatElement, defineCustomElement as defineSdsIconRepeat } from "sds-web-components/dist/components/sds-icon-repeat.js";
import { SdsIconRewind as SdsIconRewindElement, defineCustomElement as defineSdsIconRewind } from "sds-web-components/dist/components/sds-icon-rewind.js";
import { SdsIconRotateCcw as SdsIconRotateCcwElement, defineCustomElement as defineSdsIconRotateCcw } from "sds-web-components/dist/components/sds-icon-rotate-ccw.js";
import { SdsIconRotateCw as SdsIconRotateCwElement, defineCustomElement as defineSdsIconRotateCw } from "sds-web-components/dist/components/sds-icon-rotate-cw.js";
import { SdsIconRss as SdsIconRssElement, defineCustomElement as defineSdsIconRss } from "sds-web-components/dist/components/sds-icon-rss.js";
import { SdsIconSave as SdsIconSaveElement, defineCustomElement as defineSdsIconSave } from "sds-web-components/dist/components/sds-icon-save.js";
import { SdsIconScissors as SdsIconScissorsElement, defineCustomElement as defineSdsIconScissors } from "sds-web-components/dist/components/sds-icon-scissors.js";
import { SdsIconSearch as SdsIconSearchElement, defineCustomElement as defineSdsIconSearch } from "sds-web-components/dist/components/sds-icon-search.js";
import { SdsIconSend as SdsIconSendElement, defineCustomElement as defineSdsIconSend } from "sds-web-components/dist/components/sds-icon-send.js";
import { SdsIconServer as SdsIconServerElement, defineCustomElement as defineSdsIconServer } from "sds-web-components/dist/components/sds-icon-server.js";
import { SdsIconSettings as SdsIconSettingsElement, defineCustomElement as defineSdsIconSettings } from "sds-web-components/dist/components/sds-icon-settings.js";
import { SdsIconShare2 as SdsIconShare2Element, defineCustomElement as defineSdsIconShare2 } from "sds-web-components/dist/components/sds-icon-share-2.js";
import { SdsIconShare as SdsIconShareElement, defineCustomElement as defineSdsIconShare } from "sds-web-components/dist/components/sds-icon-share.js";
import { SdsIconShieldOff as SdsIconShieldOffElement, defineCustomElement as defineSdsIconShieldOff } from "sds-web-components/dist/components/sds-icon-shield-off.js";
import { SdsIconShield as SdsIconShieldElement, defineCustomElement as defineSdsIconShield } from "sds-web-components/dist/components/sds-icon-shield.js";
import { SdsIconShoppingBag as SdsIconShoppingBagElement, defineCustomElement as defineSdsIconShoppingBag } from "sds-web-components/dist/components/sds-icon-shopping-bag.js";
import { SdsIconShoppingCart as SdsIconShoppingCartElement, defineCustomElement as defineSdsIconShoppingCart } from "sds-web-components/dist/components/sds-icon-shopping-cart.js";
import { SdsIconShuffle as SdsIconShuffleElement, defineCustomElement as defineSdsIconShuffle } from "sds-web-components/dist/components/sds-icon-shuffle.js";
import { SdsIconSidebar as SdsIconSidebarElement, defineCustomElement as defineSdsIconSidebar } from "sds-web-components/dist/components/sds-icon-sidebar.js";
import { SdsIconSkipBack as SdsIconSkipBackElement, defineCustomElement as defineSdsIconSkipBack } from "sds-web-components/dist/components/sds-icon-skip-back.js";
import { SdsIconSkipForward as SdsIconSkipForwardElement, defineCustomElement as defineSdsIconSkipForward } from "sds-web-components/dist/components/sds-icon-skip-forward.js";
import { SdsIconSlack as SdsIconSlackElement, defineCustomElement as defineSdsIconSlack } from "sds-web-components/dist/components/sds-icon-slack.js";
import { SdsIconSlash as SdsIconSlashElement, defineCustomElement as defineSdsIconSlash } from "sds-web-components/dist/components/sds-icon-slash.js";
import { SdsIconSliders as SdsIconSlidersElement, defineCustomElement as defineSdsIconSliders } from "sds-web-components/dist/components/sds-icon-sliders.js";
import { SdsIconSmartphone as SdsIconSmartphoneElement, defineCustomElement as defineSdsIconSmartphone } from "sds-web-components/dist/components/sds-icon-smartphone.js";
import { SdsIconSmile as SdsIconSmileElement, defineCustomElement as defineSdsIconSmile } from "sds-web-components/dist/components/sds-icon-smile.js";
import { SdsIconSpeaker as SdsIconSpeakerElement, defineCustomElement as defineSdsIconSpeaker } from "sds-web-components/dist/components/sds-icon-speaker.js";
import { SdsIconSquare as SdsIconSquareElement, defineCustomElement as defineSdsIconSquare } from "sds-web-components/dist/components/sds-icon-square.js";
import { SdsIconStar as SdsIconStarElement, defineCustomElement as defineSdsIconStar } from "sds-web-components/dist/components/sds-icon-star.js";
import { SdsIconStopCircle as SdsIconStopCircleElement, defineCustomElement as defineSdsIconStopCircle } from "sds-web-components/dist/components/sds-icon-stop-circle.js";
import { SdsIconSun as SdsIconSunElement, defineCustomElement as defineSdsIconSun } from "sds-web-components/dist/components/sds-icon-sun.js";
import { SdsIconSunrise as SdsIconSunriseElement, defineCustomElement as defineSdsIconSunrise } from "sds-web-components/dist/components/sds-icon-sunrise.js";
import { SdsIconSunset as SdsIconSunsetElement, defineCustomElement as defineSdsIconSunset } from "sds-web-components/dist/components/sds-icon-sunset.js";
import { SdsIconTable as SdsIconTableElement, defineCustomElement as defineSdsIconTable } from "sds-web-components/dist/components/sds-icon-table.js";
import { SdsIconTablet as SdsIconTabletElement, defineCustomElement as defineSdsIconTablet } from "sds-web-components/dist/components/sds-icon-tablet.js";
import { SdsIconTag as SdsIconTagElement, defineCustomElement as defineSdsIconTag } from "sds-web-components/dist/components/sds-icon-tag.js";
import { SdsIconTarget as SdsIconTargetElement, defineCustomElement as defineSdsIconTarget } from "sds-web-components/dist/components/sds-icon-target.js";
import { SdsIconTerminal as SdsIconTerminalElement, defineCustomElement as defineSdsIconTerminal } from "sds-web-components/dist/components/sds-icon-terminal.js";
import { SdsIconThermometer as SdsIconThermometerElement, defineCustomElement as defineSdsIconThermometer } from "sds-web-components/dist/components/sds-icon-thermometer.js";
import { SdsIconThumbsDown as SdsIconThumbsDownElement, defineCustomElement as defineSdsIconThumbsDown } from "sds-web-components/dist/components/sds-icon-thumbs-down.js";
import { SdsIconThumbsUp as SdsIconThumbsUpElement, defineCustomElement as defineSdsIconThumbsUp } from "sds-web-components/dist/components/sds-icon-thumbs-up.js";
import { SdsIconToggleLeft as SdsIconToggleLeftElement, defineCustomElement as defineSdsIconToggleLeft } from "sds-web-components/dist/components/sds-icon-toggle-left.js";
import { SdsIconToggleRight as SdsIconToggleRightElement, defineCustomElement as defineSdsIconToggleRight } from "sds-web-components/dist/components/sds-icon-toggle-right.js";
import { SdsIconTool as SdsIconToolElement, defineCustomElement as defineSdsIconTool } from "sds-web-components/dist/components/sds-icon-tool.js";
import { SdsIconTrash2 as SdsIconTrash2Element, defineCustomElement as defineSdsIconTrash2 } from "sds-web-components/dist/components/sds-icon-trash-2.js";
import { SdsIconTrash as SdsIconTrashElement, defineCustomElement as defineSdsIconTrash } from "sds-web-components/dist/components/sds-icon-trash.js";
import { SdsIconTrello as SdsIconTrelloElement, defineCustomElement as defineSdsIconTrello } from "sds-web-components/dist/components/sds-icon-trello.js";
import { SdsIconTrendingDown as SdsIconTrendingDownElement, defineCustomElement as defineSdsIconTrendingDown } from "sds-web-components/dist/components/sds-icon-trending-down.js";
import { SdsIconTrendingUp as SdsIconTrendingUpElement, defineCustomElement as defineSdsIconTrendingUp } from "sds-web-components/dist/components/sds-icon-trending-up.js";
import { SdsIconTriangle as SdsIconTriangleElement, defineCustomElement as defineSdsIconTriangle } from "sds-web-components/dist/components/sds-icon-triangle.js";
import { SdsIconTruck as SdsIconTruckElement, defineCustomElement as defineSdsIconTruck } from "sds-web-components/dist/components/sds-icon-truck.js";
import { SdsIconTv as SdsIconTvElement, defineCustomElement as defineSdsIconTv } from "sds-web-components/dist/components/sds-icon-tv.js";
import { SdsIconTwitch as SdsIconTwitchElement, defineCustomElement as defineSdsIconTwitch } from "sds-web-components/dist/components/sds-icon-twitch.js";
import { SdsIconTwitter as SdsIconTwitterElement, defineCustomElement as defineSdsIconTwitter } from "sds-web-components/dist/components/sds-icon-twitter.js";
import { SdsIconType as SdsIconTypeElement, defineCustomElement as defineSdsIconType } from "sds-web-components/dist/components/sds-icon-type.js";
import { SdsIconUmbrella as SdsIconUmbrellaElement, defineCustomElement as defineSdsIconUmbrella } from "sds-web-components/dist/components/sds-icon-umbrella.js";
import { SdsIconUnderline as SdsIconUnderlineElement, defineCustomElement as defineSdsIconUnderline } from "sds-web-components/dist/components/sds-icon-underline.js";
import { SdsIconUnlock as SdsIconUnlockElement, defineCustomElement as defineSdsIconUnlock } from "sds-web-components/dist/components/sds-icon-unlock.js";
import { SdsIconUploadCloud as SdsIconUploadCloudElement, defineCustomElement as defineSdsIconUploadCloud } from "sds-web-components/dist/components/sds-icon-upload-cloud.js";
import { SdsIconUpload as SdsIconUploadElement, defineCustomElement as defineSdsIconUpload } from "sds-web-components/dist/components/sds-icon-upload.js";
import { SdsIconUserCheck as SdsIconUserCheckElement, defineCustomElement as defineSdsIconUserCheck } from "sds-web-components/dist/components/sds-icon-user-check.js";
import { SdsIconUserMinus as SdsIconUserMinusElement, defineCustomElement as defineSdsIconUserMinus } from "sds-web-components/dist/components/sds-icon-user-minus.js";
import { SdsIconUserPlus as SdsIconUserPlusElement, defineCustomElement as defineSdsIconUserPlus } from "sds-web-components/dist/components/sds-icon-user-plus.js";
import { SdsIconUserX as SdsIconUserXElement, defineCustomElement as defineSdsIconUserX } from "sds-web-components/dist/components/sds-icon-user-x.js";
import { SdsIconUser as SdsIconUserElement, defineCustomElement as defineSdsIconUser } from "sds-web-components/dist/components/sds-icon-user.js";
import { SdsIconUsers as SdsIconUsersElement, defineCustomElement as defineSdsIconUsers } from "sds-web-components/dist/components/sds-icon-users.js";
import { SdsIconVideoOff as SdsIconVideoOffElement, defineCustomElement as defineSdsIconVideoOff } from "sds-web-components/dist/components/sds-icon-video-off.js";
import { SdsIconVideo as SdsIconVideoElement, defineCustomElement as defineSdsIconVideo } from "sds-web-components/dist/components/sds-icon-video.js";
import { SdsIconVoicemail as SdsIconVoicemailElement, defineCustomElement as defineSdsIconVoicemail } from "sds-web-components/dist/components/sds-icon-voicemail.js";
import { SdsIconVolume1 as SdsIconVolume1Element, defineCustomElement as defineSdsIconVolume1 } from "sds-web-components/dist/components/sds-icon-volume-1.js";
import { SdsIconVolume2 as SdsIconVolume2Element, defineCustomElement as defineSdsIconVolume2 } from "sds-web-components/dist/components/sds-icon-volume-2.js";
import { SdsIconVolumeX as SdsIconVolumeXElement, defineCustomElement as defineSdsIconVolumeX } from "sds-web-components/dist/components/sds-icon-volume-x.js";
import { SdsIconVolume as SdsIconVolumeElement, defineCustomElement as defineSdsIconVolume } from "sds-web-components/dist/components/sds-icon-volume.js";
import { SdsIconWatch as SdsIconWatchElement, defineCustomElement as defineSdsIconWatch } from "sds-web-components/dist/components/sds-icon-watch.js";
import { SdsIconWifiOff as SdsIconWifiOffElement, defineCustomElement as defineSdsIconWifiOff } from "sds-web-components/dist/components/sds-icon-wifi-off.js";
import { SdsIconWifi as SdsIconWifiElement, defineCustomElement as defineSdsIconWifi } from "sds-web-components/dist/components/sds-icon-wifi.js";
import { SdsIconWind as SdsIconWindElement, defineCustomElement as defineSdsIconWind } from "sds-web-components/dist/components/sds-icon-wind.js";
import { SdsIconXCircle as SdsIconXCircleElement, defineCustomElement as defineSdsIconXCircle } from "sds-web-components/dist/components/sds-icon-x-circle.js";
import { SdsIconXOctagon as SdsIconXOctagonElement, defineCustomElement as defineSdsIconXOctagon } from "sds-web-components/dist/components/sds-icon-x-octagon.js";
import { SdsIconXSquare as SdsIconXSquareElement, defineCustomElement as defineSdsIconXSquare } from "sds-web-components/dist/components/sds-icon-x-square.js";
import { SdsIconX as SdsIconXElement, defineCustomElement as defineSdsIconX } from "sds-web-components/dist/components/sds-icon-x.js";
import { SdsIconYoutube as SdsIconYoutubeElement, defineCustomElement as defineSdsIconYoutube } from "sds-web-components/dist/components/sds-icon-youtube.js";
import { SdsIconZapOff as SdsIconZapOffElement, defineCustomElement as defineSdsIconZapOff } from "sds-web-components/dist/components/sds-icon-zap-off.js";
import { SdsIconZap as SdsIconZapElement, defineCustomElement as defineSdsIconZap } from "sds-web-components/dist/components/sds-icon-zap.js";
import { SdsIconZoomIn as SdsIconZoomInElement, defineCustomElement as defineSdsIconZoomIn } from "sds-web-components/dist/components/sds-icon-zoom-in.js";
import { SdsIconZoomOut as SdsIconZoomOutElement, defineCustomElement as defineSdsIconZoomOut } from "sds-web-components/dist/components/sds-icon-zoom-out.js";
import { SdsImage as SdsImageElement, defineCustomElement as defineSdsImage } from "sds-web-components/dist/components/sds-image.js";
import { SdsInputField as SdsInputFieldElement, defineCustomElement as defineSdsInputField } from "sds-web-components/dist/components/sds-input-field.js";
import { SdsInput as SdsInputElement, defineCustomElement as defineSdsInput } from "sds-web-components/dist/components/sds-input.js";
import { SdsKeyboard as SdsKeyboardElement, defineCustomElement as defineSdsKeyboard } from "sds-web-components/dist/components/sds-keyboard.js";
import { SdsLabel as SdsLabelElement, defineCustomElement as defineSdsLabel } from "sds-web-components/dist/components/sds-label.js";
import { SdsLegend as SdsLegendElement, defineCustomElement as defineSdsLegend } from "sds-web-components/dist/components/sds-legend.js";
import { SdsLink as SdsLinkElement, defineCustomElement as defineSdsLink } from "sds-web-components/dist/components/sds-link.js";
import { SdsListBoxItem as SdsListBoxItemElement, defineCustomElement as defineSdsListBoxItem } from "sds-web-components/dist/components/sds-list-box-item.js";
import { SdsListBox as SdsListBoxElement, defineCustomElement as defineSdsListBox } from "sds-web-components/dist/components/sds-list-box.js";
import { SdsLogo as SdsLogoElement, defineCustomElement as defineSdsLogo } from "sds-web-components/dist/components/sds-logo.js";
import { SdsPicture as SdsPictureElement, defineCustomElement as defineSdsPicture } from "sds-web-components/dist/components/sds-picture.js";
import { SdsSelectField as SdsSelectFieldElement, defineCustomElement as defineSdsSelectField } from "sds-web-components/dist/components/sds-select-field.js";
import { SdsSelectItem as SdsSelectItemElement, defineCustomElement as defineSdsSelectItem } from "sds-web-components/dist/components/sds-select-item.js";
import { SdsSelect as SdsSelectElement, defineCustomElement as defineSdsSelect } from "sds-web-components/dist/components/sds-select.js";
import { SdsSlider as SdsSliderElement, defineCustomElement as defineSdsSlider } from "sds-web-components/dist/components/sds-slider.js";
import { SdsTabPanel as SdsTabPanelElement, defineCustomElement as defineSdsTabPanel } from "sds-web-components/dist/components/sds-tab-panel.js";
import { SdsTab as SdsTabElement, defineCustomElement as defineSdsTab } from "sds-web-components/dist/components/sds-tab.js";
import { SdsTabs as SdsTabsElement, defineCustomElement as defineSdsTabs } from "sds-web-components/dist/components/sds-tabs.js";
import { SdsTagButton as SdsTagButtonElement, defineCustomElement as defineSdsTagButton } from "sds-web-components/dist/components/sds-tag-button.js";
import { SdsTag as SdsTagElement, defineCustomElement as defineSdsTag } from "sds-web-components/dist/components/sds-tag.js";
import { SdsTextCode as SdsTextCodeElement, defineCustomElement as defineSdsTextCode } from "sds-web-components/dist/components/sds-text-code.js";
import { SdsTextContentHeading as SdsTextContentHeadingElement, defineCustomElement as defineSdsTextContentHeading } from "sds-web-components/dist/components/sds-text-content-heading.js";
import { SdsTextContentTitle as SdsTextContentTitleElement, defineCustomElement as defineSdsTextContentTitle } from "sds-web-components/dist/components/sds-text-content-title.js";
import { SdsTextEmphasis as SdsTextEmphasisElement, defineCustomElement as defineSdsTextEmphasis } from "sds-web-components/dist/components/sds-text-emphasis.js";
import { SdsTextHeading as SdsTextHeadingElement, defineCustomElement as defineSdsTextHeading } from "sds-web-components/dist/components/sds-text-heading.js";
import { SdsTextInput as SdsTextInputElement, defineCustomElement as defineSdsTextInput } from "sds-web-components/dist/components/sds-text-input.js";
import { SdsTextLinkList as SdsTextLinkListElement, defineCustomElement as defineSdsTextLinkList } from "sds-web-components/dist/components/sds-text-link-list.js";
import { SdsTextLink as SdsTextLinkElement, defineCustomElement as defineSdsTextLink } from "sds-web-components/dist/components/sds-text-link.js";
import { SdsTextListItem as SdsTextListItemElement, defineCustomElement as defineSdsTextListItem } from "sds-web-components/dist/components/sds-text-list-item.js";
import { SdsTextList as SdsTextListElement, defineCustomElement as defineSdsTextList } from "sds-web-components/dist/components/sds-text-list.js";
import { SdsTextPrice as SdsTextPriceElement, defineCustomElement as defineSdsTextPrice } from "sds-web-components/dist/components/sds-text-price.js";
import { SdsTextSmallStrong as SdsTextSmallStrongElement, defineCustomElement as defineSdsTextSmallStrong } from "sds-web-components/dist/components/sds-text-small-strong.js";
import { SdsTextSmall as SdsTextSmallElement, defineCustomElement as defineSdsTextSmall } from "sds-web-components/dist/components/sds-text-small.js";
import { SdsTextStrong as SdsTextStrongElement, defineCustomElement as defineSdsTextStrong } from "sds-web-components/dist/components/sds-text-strong.js";
import { SdsTextSubheading as SdsTextSubheadingElement, defineCustomElement as defineSdsTextSubheading } from "sds-web-components/dist/components/sds-text-subheading.js";
import { SdsTextSubtitle as SdsTextSubtitleElement, defineCustomElement as defineSdsTextSubtitle } from "sds-web-components/dist/components/sds-text-subtitle.js";
import { SdsTextTitleHero as SdsTextTitleHeroElement, defineCustomElement as defineSdsTextTitleHero } from "sds-web-components/dist/components/sds-text-title-hero.js";
import { SdsTextTitlePage as SdsTextTitlePageElement, defineCustomElement as defineSdsTextTitlePage } from "sds-web-components/dist/components/sds-text-title-page.js";
import { SdsText as SdsTextElement, defineCustomElement as defineSdsText } from "sds-web-components/dist/components/sds-text.js";
import { SdsToggleTagGroup as SdsToggleTagGroupElement, defineCustomElement as defineSdsToggleTagGroup } from "sds-web-components/dist/components/sds-toggle-tag-group.js";
import { SdsToggleTagList as SdsToggleTagListElement, defineCustomElement as defineSdsToggleTagList } from "sds-web-components/dist/components/sds-toggle-tag-list.js";
import { SdsToggleTag as SdsToggleTagElement, defineCustomElement as defineSdsToggleTag } from "sds-web-components/dist/components/sds-toggle-tag.js";
export const SdsAccordion = createComponent({
    tagName: 'sds-accordion',
    elementClass: SdsAccordionElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsAccordion
});
export const SdsAccordionItem = createComponent({
    tagName: 'sds-accordion-item',
    elementClass: SdsAccordionItemElement,
    react: React,
    events: {
        onSdsAccordionItemExpanded: 'sds-accordion-item-expanded',
        onSdsAccordionItemCollapsed: 'sds-accordion-item-collapsed'
    },
    defineCustomElement: defineSdsAccordionItem
});
export const SdsButton = createComponent({
    tagName: 'sds-button',
    elementClass: SdsButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsButton
});
export const SdsButtonDanger = createComponent({
    tagName: 'sds-button-danger',
    elementClass: SdsButtonDangerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsButtonDanger
});
export const SdsButtonGroup = createComponent({
    tagName: 'sds-button-group',
    elementClass: SdsButtonGroupElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsButtonGroup
});
export const SdsDescription = createComponent({
    tagName: 'sds-description',
    elementClass: SdsDescriptionElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsDescription
});
export const SdsField = createComponent({
    tagName: 'sds-field',
    elementClass: SdsFieldElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsField
});
export const SdsFieldError = createComponent({
    tagName: 'sds-field-error',
    elementClass: SdsFieldErrorElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsFieldError
});
export const SdsFieldGroup = createComponent({
    tagName: 'sds-field-group',
    elementClass: SdsFieldGroupElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsFieldGroup
});
export const SdsFieldset = createComponent({
    tagName: 'sds-fieldset',
    elementClass: SdsFieldsetElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsFieldset
});
export const SdsFlex = createComponent({
    tagName: 'sds-flex',
    elementClass: SdsFlexElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsFlex
});
export const SdsFlexItem = createComponent({
    tagName: 'sds-flex-item',
    elementClass: SdsFlexItemElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsFlexItem
});
export const SdsForm = createComponent({
    tagName: 'sds-form',
    elementClass: SdsFormElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsForm
});
export const SdsIconActivity = createComponent({
    tagName: 'sds-icon-activity',
    elementClass: SdsIconActivityElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconActivity
});
export const SdsIconAirplay = createComponent({
    tagName: 'sds-icon-airplay',
    elementClass: SdsIconAirplayElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAirplay
});
export const SdsIconAlertCircle = createComponent({
    tagName: 'sds-icon-alert-circle',
    elementClass: SdsIconAlertCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlertCircle
});
export const SdsIconAlertOctagon = createComponent({
    tagName: 'sds-icon-alert-octagon',
    elementClass: SdsIconAlertOctagonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlertOctagon
});
export const SdsIconAlertTriangle = createComponent({
    tagName: 'sds-icon-alert-triangle',
    elementClass: SdsIconAlertTriangleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlertTriangle
});
export const SdsIconAlignCenter = createComponent({
    tagName: 'sds-icon-align-center',
    elementClass: SdsIconAlignCenterElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlignCenter
});
export const SdsIconAlignJustify = createComponent({
    tagName: 'sds-icon-align-justify',
    elementClass: SdsIconAlignJustifyElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlignJustify
});
export const SdsIconAlignLeft = createComponent({
    tagName: 'sds-icon-align-left',
    elementClass: SdsIconAlignLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlignLeft
});
export const SdsIconAlignRight = createComponent({
    tagName: 'sds-icon-align-right',
    elementClass: SdsIconAlignRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAlignRight
});
export const SdsIconAnchor = createComponent({
    tagName: 'sds-icon-anchor',
    elementClass: SdsIconAnchorElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAnchor
});
export const SdsIconAperture = createComponent({
    tagName: 'sds-icon-aperture',
    elementClass: SdsIconApertureElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAperture
});
export const SdsIconArchive = createComponent({
    tagName: 'sds-icon-archive',
    elementClass: SdsIconArchiveElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArchive
});
export const SdsIconArrowDown = createComponent({
    tagName: 'sds-icon-arrow-down',
    elementClass: SdsIconArrowDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowDown
});
export const SdsIconArrowDownCircle = createComponent({
    tagName: 'sds-icon-arrow-down-circle',
    elementClass: SdsIconArrowDownCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowDownCircle
});
export const SdsIconArrowDownLeft = createComponent({
    tagName: 'sds-icon-arrow-down-left',
    elementClass: SdsIconArrowDownLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowDownLeft
});
export const SdsIconArrowDownRight = createComponent({
    tagName: 'sds-icon-arrow-down-right',
    elementClass: SdsIconArrowDownRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowDownRight
});
export const SdsIconArrowLeft = createComponent({
    tagName: 'sds-icon-arrow-left',
    elementClass: SdsIconArrowLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowLeft
});
export const SdsIconArrowLeftCircle = createComponent({
    tagName: 'sds-icon-arrow-left-circle',
    elementClass: SdsIconArrowLeftCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowLeftCircle
});
export const SdsIconArrowRight = createComponent({
    tagName: 'sds-icon-arrow-right',
    elementClass: SdsIconArrowRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowRight
});
export const SdsIconArrowRightCircle = createComponent({
    tagName: 'sds-icon-arrow-right-circle',
    elementClass: SdsIconArrowRightCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowRightCircle
});
export const SdsIconArrowUp = createComponent({
    tagName: 'sds-icon-arrow-up',
    elementClass: SdsIconArrowUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowUp
});
export const SdsIconArrowUpCircle = createComponent({
    tagName: 'sds-icon-arrow-up-circle',
    elementClass: SdsIconArrowUpCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowUpCircle
});
export const SdsIconArrowUpLeft = createComponent({
    tagName: 'sds-icon-arrow-up-left',
    elementClass: SdsIconArrowUpLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowUpLeft
});
export const SdsIconArrowUpRight = createComponent({
    tagName: 'sds-icon-arrow-up-right',
    elementClass: SdsIconArrowUpRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconArrowUpRight
});
export const SdsIconAtSign = createComponent({
    tagName: 'sds-icon-at-sign',
    elementClass: SdsIconAtSignElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAtSign
});
export const SdsIconAward = createComponent({
    tagName: 'sds-icon-award',
    elementClass: SdsIconAwardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconAward
});
export const SdsIconBarChart = createComponent({
    tagName: 'sds-icon-bar-chart',
    elementClass: SdsIconBarChartElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBarChart
});
export const SdsIconBarChart2 = createComponent({
    tagName: 'sds-icon-bar-chart-2',
    elementClass: SdsIconBarChart2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBarChart2
});
export const SdsIconBattery = createComponent({
    tagName: 'sds-icon-battery',
    elementClass: SdsIconBatteryElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBattery
});
export const SdsIconBatteryCharging = createComponent({
    tagName: 'sds-icon-battery-charging',
    elementClass: SdsIconBatteryChargingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBatteryCharging
});
export const SdsIconBell = createComponent({
    tagName: 'sds-icon-bell',
    elementClass: SdsIconBellElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBell
});
export const SdsIconBellOff = createComponent({
    tagName: 'sds-icon-bell-off',
    elementClass: SdsIconBellOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBellOff
});
export const SdsIconBluetooth = createComponent({
    tagName: 'sds-icon-bluetooth',
    elementClass: SdsIconBluetoothElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBluetooth
});
export const SdsIconBold = createComponent({
    tagName: 'sds-icon-bold',
    elementClass: SdsIconBoldElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBold
});
export const SdsIconBook = createComponent({
    tagName: 'sds-icon-book',
    elementClass: SdsIconBookElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBook
});
export const SdsIconBookOpen = createComponent({
    tagName: 'sds-icon-book-open',
    elementClass: SdsIconBookOpenElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBookOpen
});
export const SdsIconBookmark = createComponent({
    tagName: 'sds-icon-bookmark',
    elementClass: SdsIconBookmarkElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBookmark
});
export const SdsIconBox = createComponent({
    tagName: 'sds-icon-box',
    elementClass: SdsIconBoxElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBox
});
export const SdsIconBriefcase = createComponent({
    tagName: 'sds-icon-briefcase',
    elementClass: SdsIconBriefcaseElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconBriefcase
});
export const SdsIconCalendar = createComponent({
    tagName: 'sds-icon-calendar',
    elementClass: SdsIconCalendarElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCalendar
});
export const SdsIconCamera = createComponent({
    tagName: 'sds-icon-camera',
    elementClass: SdsIconCameraElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCamera
});
export const SdsIconCameraOff = createComponent({
    tagName: 'sds-icon-camera-off',
    elementClass: SdsIconCameraOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCameraOff
});
export const SdsIconCast = createComponent({
    tagName: 'sds-icon-cast',
    elementClass: SdsIconCastElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCast
});
export const SdsIconCheck = createComponent({
    tagName: 'sds-icon-check',
    elementClass: SdsIconCheckElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCheck
});
export const SdsIconCheckCircle = createComponent({
    tagName: 'sds-icon-check-circle',
    elementClass: SdsIconCheckCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCheckCircle
});
export const SdsIconCheckSquare = createComponent({
    tagName: 'sds-icon-check-square',
    elementClass: SdsIconCheckSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCheckSquare
});
export const SdsIconChevronDown = createComponent({
    tagName: 'sds-icon-chevron-down',
    elementClass: SdsIconChevronDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronDown
});
export const SdsIconChevronLeft = createComponent({
    tagName: 'sds-icon-chevron-left',
    elementClass: SdsIconChevronLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronLeft
});
export const SdsIconChevronRight = createComponent({
    tagName: 'sds-icon-chevron-right',
    elementClass: SdsIconChevronRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronRight
});
export const SdsIconChevronUp = createComponent({
    tagName: 'sds-icon-chevron-up',
    elementClass: SdsIconChevronUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronUp
});
export const SdsIconChevronsDown = createComponent({
    tagName: 'sds-icon-chevrons-down',
    elementClass: SdsIconChevronsDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronsDown
});
export const SdsIconChevronsLeft = createComponent({
    tagName: 'sds-icon-chevrons-left',
    elementClass: SdsIconChevronsLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronsLeft
});
export const SdsIconChevronsRight = createComponent({
    tagName: 'sds-icon-chevrons-right',
    elementClass: SdsIconChevronsRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronsRight
});
export const SdsIconChevronsUp = createComponent({
    tagName: 'sds-icon-chevrons-up',
    elementClass: SdsIconChevronsUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChevronsUp
});
export const SdsIconChrome = createComponent({
    tagName: 'sds-icon-chrome',
    elementClass: SdsIconChromeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconChrome
});
export const SdsIconCircle = createComponent({
    tagName: 'sds-icon-circle',
    elementClass: SdsIconCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCircle
});
export const SdsIconClipboard = createComponent({
    tagName: 'sds-icon-clipboard',
    elementClass: SdsIconClipboardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconClipboard
});
export const SdsIconClock = createComponent({
    tagName: 'sds-icon-clock',
    elementClass: SdsIconClockElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconClock
});
export const SdsIconCloud = createComponent({
    tagName: 'sds-icon-cloud',
    elementClass: SdsIconCloudElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloud
});
export const SdsIconCloudDrizzle = createComponent({
    tagName: 'sds-icon-cloud-drizzle',
    elementClass: SdsIconCloudDrizzleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloudDrizzle
});
export const SdsIconCloudLightning = createComponent({
    tagName: 'sds-icon-cloud-lightning',
    elementClass: SdsIconCloudLightningElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloudLightning
});
export const SdsIconCloudOff = createComponent({
    tagName: 'sds-icon-cloud-off',
    elementClass: SdsIconCloudOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloudOff
});
export const SdsIconCloudRain = createComponent({
    tagName: 'sds-icon-cloud-rain',
    elementClass: SdsIconCloudRainElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloudRain
});
export const SdsIconCloudSnow = createComponent({
    tagName: 'sds-icon-cloud-snow',
    elementClass: SdsIconCloudSnowElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCloudSnow
});
export const SdsIconCode = createComponent({
    tagName: 'sds-icon-code',
    elementClass: SdsIconCodeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCode
});
export const SdsIconCodepen = createComponent({
    tagName: 'sds-icon-codepen',
    elementClass: SdsIconCodepenElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCodepen
});
export const SdsIconCodesandbox = createComponent({
    tagName: 'sds-icon-codesandbox',
    elementClass: SdsIconCodesandboxElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCodesandbox
});
export const SdsIconCoffee = createComponent({
    tagName: 'sds-icon-coffee',
    elementClass: SdsIconCoffeeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCoffee
});
export const SdsIconColumns = createComponent({
    tagName: 'sds-icon-columns',
    elementClass: SdsIconColumnsElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconColumns
});
export const SdsIconCommand = createComponent({
    tagName: 'sds-icon-command',
    elementClass: SdsIconCommandElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCommand
});
export const SdsIconCompass = createComponent({
    tagName: 'sds-icon-compass',
    elementClass: SdsIconCompassElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCompass
});
export const SdsIconCopy = createComponent({
    tagName: 'sds-icon-copy',
    elementClass: SdsIconCopyElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCopy
});
export const SdsIconCornerDownLeft = createComponent({
    tagName: 'sds-icon-corner-down-left',
    elementClass: SdsIconCornerDownLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerDownLeft
});
export const SdsIconCornerDownRight = createComponent({
    tagName: 'sds-icon-corner-down-right',
    elementClass: SdsIconCornerDownRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerDownRight
});
export const SdsIconCornerLeftDown = createComponent({
    tagName: 'sds-icon-corner-left-down',
    elementClass: SdsIconCornerLeftDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerLeftDown
});
export const SdsIconCornerLeftUp = createComponent({
    tagName: 'sds-icon-corner-left-up',
    elementClass: SdsIconCornerLeftUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerLeftUp
});
export const SdsIconCornerRightDown = createComponent({
    tagName: 'sds-icon-corner-right-down',
    elementClass: SdsIconCornerRightDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerRightDown
});
export const SdsIconCornerRightUp = createComponent({
    tagName: 'sds-icon-corner-right-up',
    elementClass: SdsIconCornerRightUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerRightUp
});
export const SdsIconCornerUpLeft = createComponent({
    tagName: 'sds-icon-corner-up-left',
    elementClass: SdsIconCornerUpLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerUpLeft
});
export const SdsIconCornerUpRight = createComponent({
    tagName: 'sds-icon-corner-up-right',
    elementClass: SdsIconCornerUpRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCornerUpRight
});
export const SdsIconCpu = createComponent({
    tagName: 'sds-icon-cpu',
    elementClass: SdsIconCpuElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCpu
});
export const SdsIconCreditCard = createComponent({
    tagName: 'sds-icon-credit-card',
    elementClass: SdsIconCreditCardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCreditCard
});
export const SdsIconCrop = createComponent({
    tagName: 'sds-icon-crop',
    elementClass: SdsIconCropElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCrop
});
export const SdsIconCrosshair = createComponent({
    tagName: 'sds-icon-crosshair',
    elementClass: SdsIconCrosshairElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconCrosshair
});
export const SdsIconDatabase = createComponent({
    tagName: 'sds-icon-database',
    elementClass: SdsIconDatabaseElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDatabase
});
export const SdsIconDelete = createComponent({
    tagName: 'sds-icon-delete',
    elementClass: SdsIconDeleteElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDelete
});
export const SdsIconDisc = createComponent({
    tagName: 'sds-icon-disc',
    elementClass: SdsIconDiscElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDisc
});
export const SdsIconDivide = createComponent({
    tagName: 'sds-icon-divide',
    elementClass: SdsIconDivideElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDivide
});
export const SdsIconDivideCircle = createComponent({
    tagName: 'sds-icon-divide-circle',
    elementClass: SdsIconDivideCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDivideCircle
});
export const SdsIconDivideSquare = createComponent({
    tagName: 'sds-icon-divide-square',
    elementClass: SdsIconDivideSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDivideSquare
});
export const SdsIconDollarSign = createComponent({
    tagName: 'sds-icon-dollar-sign',
    elementClass: SdsIconDollarSignElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDollarSign
});
export const SdsIconDownload = createComponent({
    tagName: 'sds-icon-download',
    elementClass: SdsIconDownloadElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDownload
});
export const SdsIconDownloadCloud = createComponent({
    tagName: 'sds-icon-download-cloud',
    elementClass: SdsIconDownloadCloudElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDownloadCloud
});
export const SdsIconDribbble = createComponent({
    tagName: 'sds-icon-dribbble',
    elementClass: SdsIconDribbbleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDribbble
});
export const SdsIconDroplet = createComponent({
    tagName: 'sds-icon-droplet',
    elementClass: SdsIconDropletElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconDroplet
});
export const SdsIconEdit = createComponent({
    tagName: 'sds-icon-edit',
    elementClass: SdsIconEditElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconEdit
});
export const SdsIconEdit2 = createComponent({
    tagName: 'sds-icon-edit-2',
    elementClass: SdsIconEdit2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconEdit2
});
export const SdsIconEdit3 = createComponent({
    tagName: 'sds-icon-edit-3',
    elementClass: SdsIconEdit3Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconEdit3
});
export const SdsIconExternalLink = createComponent({
    tagName: 'sds-icon-external-link',
    elementClass: SdsIconExternalLinkElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconExternalLink
});
export const SdsIconEye = createComponent({
    tagName: 'sds-icon-eye',
    elementClass: SdsIconEyeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconEye
});
export const SdsIconEyeOff = createComponent({
    tagName: 'sds-icon-eye-off',
    elementClass: SdsIconEyeOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconEyeOff
});
export const SdsIconFacebook = createComponent({
    tagName: 'sds-icon-facebook',
    elementClass: SdsIconFacebookElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFacebook
});
export const SdsIconFastForward = createComponent({
    tagName: 'sds-icon-fast-forward',
    elementClass: SdsIconFastForwardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFastForward
});
export const SdsIconFeather = createComponent({
    tagName: 'sds-icon-feather',
    elementClass: SdsIconFeatherElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFeather
});
export const SdsIconFigma = createComponent({
    tagName: 'sds-icon-figma',
    elementClass: SdsIconFigmaElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFigma
});
export const SdsIconFile = createComponent({
    tagName: 'sds-icon-file',
    elementClass: SdsIconFileElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFile
});
export const SdsIconFileMinus = createComponent({
    tagName: 'sds-icon-file-minus',
    elementClass: SdsIconFileMinusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFileMinus
});
export const SdsIconFilePlus = createComponent({
    tagName: 'sds-icon-file-plus',
    elementClass: SdsIconFilePlusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFilePlus
});
export const SdsIconFileText = createComponent({
    tagName: 'sds-icon-file-text',
    elementClass: SdsIconFileTextElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFileText
});
export const SdsIconFilm = createComponent({
    tagName: 'sds-icon-film',
    elementClass: SdsIconFilmElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFilm
});
export const SdsIconFilter = createComponent({
    tagName: 'sds-icon-filter',
    elementClass: SdsIconFilterElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFilter
});
export const SdsIconFlag = createComponent({
    tagName: 'sds-icon-flag',
    elementClass: SdsIconFlagElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFlag
});
export const SdsIconFolder = createComponent({
    tagName: 'sds-icon-folder',
    elementClass: SdsIconFolderElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFolder
});
export const SdsIconFolderMinus = createComponent({
    tagName: 'sds-icon-folder-minus',
    elementClass: SdsIconFolderMinusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFolderMinus
});
export const SdsIconFolderPlus = createComponent({
    tagName: 'sds-icon-folder-plus',
    elementClass: SdsIconFolderPlusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFolderPlus
});
export const SdsIconFramer = createComponent({
    tagName: 'sds-icon-framer',
    elementClass: SdsIconFramerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFramer
});
export const SdsIconFrown = createComponent({
    tagName: 'sds-icon-frown',
    elementClass: SdsIconFrownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconFrown
});
export const SdsIconGift = createComponent({
    tagName: 'sds-icon-gift',
    elementClass: SdsIconGiftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGift
});
export const SdsIconGitBranch = createComponent({
    tagName: 'sds-icon-git-branch',
    elementClass: SdsIconGitBranchElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGitBranch
});
export const SdsIconGitCommit = createComponent({
    tagName: 'sds-icon-git-commit',
    elementClass: SdsIconGitCommitElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGitCommit
});
export const SdsIconGitMerge = createComponent({
    tagName: 'sds-icon-git-merge',
    elementClass: SdsIconGitMergeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGitMerge
});
export const SdsIconGitPullRequest = createComponent({
    tagName: 'sds-icon-git-pull-request',
    elementClass: SdsIconGitPullRequestElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGitPullRequest
});
export const SdsIconGithub = createComponent({
    tagName: 'sds-icon-github',
    elementClass: SdsIconGithubElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGithub
});
export const SdsIconGitlab = createComponent({
    tagName: 'sds-icon-gitlab',
    elementClass: SdsIconGitlabElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGitlab
});
export const SdsIconGlobe = createComponent({
    tagName: 'sds-icon-globe',
    elementClass: SdsIconGlobeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGlobe
});
export const SdsIconGrid = createComponent({
    tagName: 'sds-icon-grid',
    elementClass: SdsIconGridElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconGrid
});
export const SdsIconHardDrive = createComponent({
    tagName: 'sds-icon-hard-drive',
    elementClass: SdsIconHardDriveElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHardDrive
});
export const SdsIconHash = createComponent({
    tagName: 'sds-icon-hash',
    elementClass: SdsIconHashElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHash
});
export const SdsIconHeadphones = createComponent({
    tagName: 'sds-icon-headphones',
    elementClass: SdsIconHeadphonesElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHeadphones
});
export const SdsIconHeart = createComponent({
    tagName: 'sds-icon-heart',
    elementClass: SdsIconHeartElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHeart
});
export const SdsIconHelpCircle = createComponent({
    tagName: 'sds-icon-help-circle',
    elementClass: SdsIconHelpCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHelpCircle
});
export const SdsIconHexagon = createComponent({
    tagName: 'sds-icon-hexagon',
    elementClass: SdsIconHexagonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHexagon
});
export const SdsIconHome = createComponent({
    tagName: 'sds-icon-home',
    elementClass: SdsIconHomeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconHome
});
export const SdsIconImage = createComponent({
    tagName: 'sds-icon-image',
    elementClass: SdsIconImageElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconImage
});
export const SdsIconInbox = createComponent({
    tagName: 'sds-icon-inbox',
    elementClass: SdsIconInboxElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconInbox
});
export const SdsIconInfo = createComponent({
    tagName: 'sds-icon-info',
    elementClass: SdsIconInfoElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconInfo
});
export const SdsIconInstagram = createComponent({
    tagName: 'sds-icon-instagram',
    elementClass: SdsIconInstagramElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconInstagram
});
export const SdsIconItalic = createComponent({
    tagName: 'sds-icon-italic',
    elementClass: SdsIconItalicElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconItalic
});
export const SdsIconKey = createComponent({
    tagName: 'sds-icon-key',
    elementClass: SdsIconKeyElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconKey
});
export const SdsIconLayers = createComponent({
    tagName: 'sds-icon-layers',
    elementClass: SdsIconLayersElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLayers
});
export const SdsIconLayout = createComponent({
    tagName: 'sds-icon-layout',
    elementClass: SdsIconLayoutElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLayout
});
export const SdsIconLifeBuoy = createComponent({
    tagName: 'sds-icon-life-buoy',
    elementClass: SdsIconLifeBuoyElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLifeBuoy
});
export const SdsIconLink = createComponent({
    tagName: 'sds-icon-link',
    elementClass: SdsIconLinkElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLink
});
export const SdsIconLink2 = createComponent({
    tagName: 'sds-icon-link-2',
    elementClass: SdsIconLink2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLink2
});
export const SdsIconLinkedin = createComponent({
    tagName: 'sds-icon-linkedin',
    elementClass: SdsIconLinkedinElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLinkedin
});
export const SdsIconList = createComponent({
    tagName: 'sds-icon-list',
    elementClass: SdsIconListElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconList
});
export const SdsIconLoader = createComponent({
    tagName: 'sds-icon-loader',
    elementClass: SdsIconLoaderElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLoader
});
export const SdsIconLock = createComponent({
    tagName: 'sds-icon-lock',
    elementClass: SdsIconLockElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLock
});
export const SdsIconLogIn = createComponent({
    tagName: 'sds-icon-log-in',
    elementClass: SdsIconLogInElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLogIn
});
export const SdsIconLogOut = createComponent({
    tagName: 'sds-icon-log-out',
    elementClass: SdsIconLogOutElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconLogOut
});
export const SdsIconMail = createComponent({
    tagName: 'sds-icon-mail',
    elementClass: SdsIconMailElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMail
});
export const SdsIconMap = createComponent({
    tagName: 'sds-icon-map',
    elementClass: SdsIconMapElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMap
});
export const SdsIconMapPin = createComponent({
    tagName: 'sds-icon-map-pin',
    elementClass: SdsIconMapPinElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMapPin
});
export const SdsIconMaximize = createComponent({
    tagName: 'sds-icon-maximize',
    elementClass: SdsIconMaximizeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMaximize
});
export const SdsIconMaximize2 = createComponent({
    tagName: 'sds-icon-maximize-2',
    elementClass: SdsIconMaximize2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMaximize2
});
export const SdsIconMeh = createComponent({
    tagName: 'sds-icon-meh',
    elementClass: SdsIconMehElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMeh
});
export const SdsIconMenu = createComponent({
    tagName: 'sds-icon-menu',
    elementClass: SdsIconMenuElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMenu
});
export const SdsIconMessageCircle = createComponent({
    tagName: 'sds-icon-message-circle',
    elementClass: SdsIconMessageCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMessageCircle
});
export const SdsIconMessageSquare = createComponent({
    tagName: 'sds-icon-message-square',
    elementClass: SdsIconMessageSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMessageSquare
});
export const SdsIconMic = createComponent({
    tagName: 'sds-icon-mic',
    elementClass: SdsIconMicElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMic
});
export const SdsIconMicOff = createComponent({
    tagName: 'sds-icon-mic-off',
    elementClass: SdsIconMicOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMicOff
});
export const SdsIconMinimize = createComponent({
    tagName: 'sds-icon-minimize',
    elementClass: SdsIconMinimizeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMinimize
});
export const SdsIconMinimize2 = createComponent({
    tagName: 'sds-icon-minimize-2',
    elementClass: SdsIconMinimize2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMinimize2
});
export const SdsIconMinus = createComponent({
    tagName: 'sds-icon-minus',
    elementClass: SdsIconMinusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMinus
});
export const SdsIconMinusCircle = createComponent({
    tagName: 'sds-icon-minus-circle',
    elementClass: SdsIconMinusCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMinusCircle
});
export const SdsIconMinusSquare = createComponent({
    tagName: 'sds-icon-minus-square',
    elementClass: SdsIconMinusSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMinusSquare
});
export const SdsIconMonitor = createComponent({
    tagName: 'sds-icon-monitor',
    elementClass: SdsIconMonitorElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMonitor
});
export const SdsIconMoon = createComponent({
    tagName: 'sds-icon-moon',
    elementClass: SdsIconMoonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMoon
});
export const SdsIconMoreHorizontal = createComponent({
    tagName: 'sds-icon-more-horizontal',
    elementClass: SdsIconMoreHorizontalElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMoreHorizontal
});
export const SdsIconMoreVertical = createComponent({
    tagName: 'sds-icon-more-vertical',
    elementClass: SdsIconMoreVerticalElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMoreVertical
});
export const SdsIconMousePointer = createComponent({
    tagName: 'sds-icon-mouse-pointer',
    elementClass: SdsIconMousePointerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMousePointer
});
export const SdsIconMove = createComponent({
    tagName: 'sds-icon-move',
    elementClass: SdsIconMoveElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMove
});
export const SdsIconMusic = createComponent({
    tagName: 'sds-icon-music',
    elementClass: SdsIconMusicElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconMusic
});
export const SdsIconNavigation = createComponent({
    tagName: 'sds-icon-navigation',
    elementClass: SdsIconNavigationElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconNavigation
});
export const SdsIconNavigation2 = createComponent({
    tagName: 'sds-icon-navigation-2',
    elementClass: SdsIconNavigation2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconNavigation2
});
export const SdsIconOctagon = createComponent({
    tagName: 'sds-icon-octagon',
    elementClass: SdsIconOctagonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconOctagon
});
export const SdsIconPackage = createComponent({
    tagName: 'sds-icon-package',
    elementClass: SdsIconPackageElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPackage
});
export const SdsIconPaperclip = createComponent({
    tagName: 'sds-icon-paperclip',
    elementClass: SdsIconPaperclipElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPaperclip
});
export const SdsIconPause = createComponent({
    tagName: 'sds-icon-pause',
    elementClass: SdsIconPauseElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPause
});
export const SdsIconPauseCircle = createComponent({
    tagName: 'sds-icon-pause-circle',
    elementClass: SdsIconPauseCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPauseCircle
});
export const SdsIconPenTool = createComponent({
    tagName: 'sds-icon-pen-tool',
    elementClass: SdsIconPenToolElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPenTool
});
export const SdsIconPercent = createComponent({
    tagName: 'sds-icon-percent',
    elementClass: SdsIconPercentElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPercent
});
export const SdsIconPhone = createComponent({
    tagName: 'sds-icon-phone',
    elementClass: SdsIconPhoneElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhone
});
export const SdsIconPhoneCall = createComponent({
    tagName: 'sds-icon-phone-call',
    elementClass: SdsIconPhoneCallElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneCall
});
export const SdsIconPhoneForwarded = createComponent({
    tagName: 'sds-icon-phone-forwarded',
    elementClass: SdsIconPhoneForwardedElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneForwarded
});
export const SdsIconPhoneIncoming = createComponent({
    tagName: 'sds-icon-phone-incoming',
    elementClass: SdsIconPhoneIncomingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneIncoming
});
export const SdsIconPhoneMissed = createComponent({
    tagName: 'sds-icon-phone-missed',
    elementClass: SdsIconPhoneMissedElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneMissed
});
export const SdsIconPhoneOff = createComponent({
    tagName: 'sds-icon-phone-off',
    elementClass: SdsIconPhoneOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneOff
});
export const SdsIconPhoneOutgoing = createComponent({
    tagName: 'sds-icon-phone-outgoing',
    elementClass: SdsIconPhoneOutgoingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPhoneOutgoing
});
export const SdsIconPieChart = createComponent({
    tagName: 'sds-icon-pie-chart',
    elementClass: SdsIconPieChartElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPieChart
});
export const SdsIconPlay = createComponent({
    tagName: 'sds-icon-play',
    elementClass: SdsIconPlayElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPlay
});
export const SdsIconPlayCircle = createComponent({
    tagName: 'sds-icon-play-circle',
    elementClass: SdsIconPlayCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPlayCircle
});
export const SdsIconPlus = createComponent({
    tagName: 'sds-icon-plus',
    elementClass: SdsIconPlusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPlus
});
export const SdsIconPlusCircle = createComponent({
    tagName: 'sds-icon-plus-circle',
    elementClass: SdsIconPlusCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPlusCircle
});
export const SdsIconPlusSquare = createComponent({
    tagName: 'sds-icon-plus-square',
    elementClass: SdsIconPlusSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPlusSquare
});
export const SdsIconPocket = createComponent({
    tagName: 'sds-icon-pocket',
    elementClass: SdsIconPocketElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPocket
});
export const SdsIconPower = createComponent({
    tagName: 'sds-icon-power',
    elementClass: SdsIconPowerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPower
});
export const SdsIconPrinter = createComponent({
    tagName: 'sds-icon-printer',
    elementClass: SdsIconPrinterElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconPrinter
});
export const SdsIconRadio = createComponent({
    tagName: 'sds-icon-radio',
    elementClass: SdsIconRadioElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRadio
});
export const SdsIconRefreshCcw = createComponent({
    tagName: 'sds-icon-refresh-ccw',
    elementClass: SdsIconRefreshCcwElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRefreshCcw
});
export const SdsIconRefreshCw = createComponent({
    tagName: 'sds-icon-refresh-cw',
    elementClass: SdsIconRefreshCwElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRefreshCw
});
export const SdsIconRepeat = createComponent({
    tagName: 'sds-icon-repeat',
    elementClass: SdsIconRepeatElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRepeat
});
export const SdsIconRewind = createComponent({
    tagName: 'sds-icon-rewind',
    elementClass: SdsIconRewindElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRewind
});
export const SdsIconRotateCcw = createComponent({
    tagName: 'sds-icon-rotate-ccw',
    elementClass: SdsIconRotateCcwElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRotateCcw
});
export const SdsIconRotateCw = createComponent({
    tagName: 'sds-icon-rotate-cw',
    elementClass: SdsIconRotateCwElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRotateCw
});
export const SdsIconRss = createComponent({
    tagName: 'sds-icon-rss',
    elementClass: SdsIconRssElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconRss
});
export const SdsIconSave = createComponent({
    tagName: 'sds-icon-save',
    elementClass: SdsIconSaveElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSave
});
export const SdsIconScissors = createComponent({
    tagName: 'sds-icon-scissors',
    elementClass: SdsIconScissorsElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconScissors
});
export const SdsIconSearch = createComponent({
    tagName: 'sds-icon-search',
    elementClass: SdsIconSearchElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSearch
});
export const SdsIconSend = createComponent({
    tagName: 'sds-icon-send',
    elementClass: SdsIconSendElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSend
});
export const SdsIconServer = createComponent({
    tagName: 'sds-icon-server',
    elementClass: SdsIconServerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconServer
});
export const SdsIconSettings = createComponent({
    tagName: 'sds-icon-settings',
    elementClass: SdsIconSettingsElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSettings
});
export const SdsIconShare = createComponent({
    tagName: 'sds-icon-share',
    elementClass: SdsIconShareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShare
});
export const SdsIconShare2 = createComponent({
    tagName: 'sds-icon-share-2',
    elementClass: SdsIconShare2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShare2
});
export const SdsIconShield = createComponent({
    tagName: 'sds-icon-shield',
    elementClass: SdsIconShieldElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShield
});
export const SdsIconShieldOff = createComponent({
    tagName: 'sds-icon-shield-off',
    elementClass: SdsIconShieldOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShieldOff
});
export const SdsIconShoppingBag = createComponent({
    tagName: 'sds-icon-shopping-bag',
    elementClass: SdsIconShoppingBagElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShoppingBag
});
export const SdsIconShoppingCart = createComponent({
    tagName: 'sds-icon-shopping-cart',
    elementClass: SdsIconShoppingCartElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShoppingCart
});
export const SdsIconShuffle = createComponent({
    tagName: 'sds-icon-shuffle',
    elementClass: SdsIconShuffleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconShuffle
});
export const SdsIconSidebar = createComponent({
    tagName: 'sds-icon-sidebar',
    elementClass: SdsIconSidebarElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSidebar
});
export const SdsIconSkipBack = createComponent({
    tagName: 'sds-icon-skip-back',
    elementClass: SdsIconSkipBackElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSkipBack
});
export const SdsIconSkipForward = createComponent({
    tagName: 'sds-icon-skip-forward',
    elementClass: SdsIconSkipForwardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSkipForward
});
export const SdsIconSlack = createComponent({
    tagName: 'sds-icon-slack',
    elementClass: SdsIconSlackElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSlack
});
export const SdsIconSlash = createComponent({
    tagName: 'sds-icon-slash',
    elementClass: SdsIconSlashElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSlash
});
export const SdsIconSliders = createComponent({
    tagName: 'sds-icon-sliders',
    elementClass: SdsIconSlidersElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSliders
});
export const SdsIconSmartphone = createComponent({
    tagName: 'sds-icon-smartphone',
    elementClass: SdsIconSmartphoneElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSmartphone
});
export const SdsIconSmile = createComponent({
    tagName: 'sds-icon-smile',
    elementClass: SdsIconSmileElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSmile
});
export const SdsIconSpeaker = createComponent({
    tagName: 'sds-icon-speaker',
    elementClass: SdsIconSpeakerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSpeaker
});
export const SdsIconSquare = createComponent({
    tagName: 'sds-icon-square',
    elementClass: SdsIconSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSquare
});
export const SdsIconStar = createComponent({
    tagName: 'sds-icon-star',
    elementClass: SdsIconStarElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconStar
});
export const SdsIconStopCircle = createComponent({
    tagName: 'sds-icon-stop-circle',
    elementClass: SdsIconStopCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconStopCircle
});
export const SdsIconSun = createComponent({
    tagName: 'sds-icon-sun',
    elementClass: SdsIconSunElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSun
});
export const SdsIconSunrise = createComponent({
    tagName: 'sds-icon-sunrise',
    elementClass: SdsIconSunriseElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSunrise
});
export const SdsIconSunset = createComponent({
    tagName: 'sds-icon-sunset',
    elementClass: SdsIconSunsetElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconSunset
});
export const SdsIconTable = createComponent({
    tagName: 'sds-icon-table',
    elementClass: SdsIconTableElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTable
});
export const SdsIconTablet = createComponent({
    tagName: 'sds-icon-tablet',
    elementClass: SdsIconTabletElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTablet
});
export const SdsIconTag = createComponent({
    tagName: 'sds-icon-tag',
    elementClass: SdsIconTagElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTag
});
export const SdsIconTarget = createComponent({
    tagName: 'sds-icon-target',
    elementClass: SdsIconTargetElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTarget
});
export const SdsIconTerminal = createComponent({
    tagName: 'sds-icon-terminal',
    elementClass: SdsIconTerminalElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTerminal
});
export const SdsIconThermometer = createComponent({
    tagName: 'sds-icon-thermometer',
    elementClass: SdsIconThermometerElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconThermometer
});
export const SdsIconThumbsDown = createComponent({
    tagName: 'sds-icon-thumbs-down',
    elementClass: SdsIconThumbsDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconThumbsDown
});
export const SdsIconThumbsUp = createComponent({
    tagName: 'sds-icon-thumbs-up',
    elementClass: SdsIconThumbsUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconThumbsUp
});
export const SdsIconToggleLeft = createComponent({
    tagName: 'sds-icon-toggle-left',
    elementClass: SdsIconToggleLeftElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconToggleLeft
});
export const SdsIconToggleRight = createComponent({
    tagName: 'sds-icon-toggle-right',
    elementClass: SdsIconToggleRightElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconToggleRight
});
export const SdsIconTool = createComponent({
    tagName: 'sds-icon-tool',
    elementClass: SdsIconToolElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTool
});
export const SdsIconTrash = createComponent({
    tagName: 'sds-icon-trash',
    elementClass: SdsIconTrashElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTrash
});
export const SdsIconTrash2 = createComponent({
    tagName: 'sds-icon-trash-2',
    elementClass: SdsIconTrash2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTrash2
});
export const SdsIconTrello = createComponent({
    tagName: 'sds-icon-trello',
    elementClass: SdsIconTrelloElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTrello
});
export const SdsIconTrendingDown = createComponent({
    tagName: 'sds-icon-trending-down',
    elementClass: SdsIconTrendingDownElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTrendingDown
});
export const SdsIconTrendingUp = createComponent({
    tagName: 'sds-icon-trending-up',
    elementClass: SdsIconTrendingUpElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTrendingUp
});
export const SdsIconTriangle = createComponent({
    tagName: 'sds-icon-triangle',
    elementClass: SdsIconTriangleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTriangle
});
export const SdsIconTruck = createComponent({
    tagName: 'sds-icon-truck',
    elementClass: SdsIconTruckElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTruck
});
export const SdsIconTv = createComponent({
    tagName: 'sds-icon-tv',
    elementClass: SdsIconTvElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTv
});
export const SdsIconTwitch = createComponent({
    tagName: 'sds-icon-twitch',
    elementClass: SdsIconTwitchElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTwitch
});
export const SdsIconTwitter = createComponent({
    tagName: 'sds-icon-twitter',
    elementClass: SdsIconTwitterElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconTwitter
});
export const SdsIconType = createComponent({
    tagName: 'sds-icon-type',
    elementClass: SdsIconTypeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconType
});
export const SdsIconUmbrella = createComponent({
    tagName: 'sds-icon-umbrella',
    elementClass: SdsIconUmbrellaElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUmbrella
});
export const SdsIconUnderline = createComponent({
    tagName: 'sds-icon-underline',
    elementClass: SdsIconUnderlineElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUnderline
});
export const SdsIconUnlock = createComponent({
    tagName: 'sds-icon-unlock',
    elementClass: SdsIconUnlockElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUnlock
});
export const SdsIconUpload = createComponent({
    tagName: 'sds-icon-upload',
    elementClass: SdsIconUploadElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUpload
});
export const SdsIconUploadCloud = createComponent({
    tagName: 'sds-icon-upload-cloud',
    elementClass: SdsIconUploadCloudElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUploadCloud
});
export const SdsIconUser = createComponent({
    tagName: 'sds-icon-user',
    elementClass: SdsIconUserElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUser
});
export const SdsIconUserCheck = createComponent({
    tagName: 'sds-icon-user-check',
    elementClass: SdsIconUserCheckElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUserCheck
});
export const SdsIconUserMinus = createComponent({
    tagName: 'sds-icon-user-minus',
    elementClass: SdsIconUserMinusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUserMinus
});
export const SdsIconUserPlus = createComponent({
    tagName: 'sds-icon-user-plus',
    elementClass: SdsIconUserPlusElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUserPlus
});
export const SdsIconUserX = createComponent({
    tagName: 'sds-icon-user-x',
    elementClass: SdsIconUserXElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUserX
});
export const SdsIconUsers = createComponent({
    tagName: 'sds-icon-users',
    elementClass: SdsIconUsersElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconUsers
});
export const SdsIconVideo = createComponent({
    tagName: 'sds-icon-video',
    elementClass: SdsIconVideoElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVideo
});
export const SdsIconVideoOff = createComponent({
    tagName: 'sds-icon-video-off',
    elementClass: SdsIconVideoOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVideoOff
});
export const SdsIconVoicemail = createComponent({
    tagName: 'sds-icon-voicemail',
    elementClass: SdsIconVoicemailElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVoicemail
});
export const SdsIconVolume = createComponent({
    tagName: 'sds-icon-volume',
    elementClass: SdsIconVolumeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVolume
});
export const SdsIconVolume1 = createComponent({
    tagName: 'sds-icon-volume-1',
    elementClass: SdsIconVolume1Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVolume1
});
export const SdsIconVolume2 = createComponent({
    tagName: 'sds-icon-volume-2',
    elementClass: SdsIconVolume2Element,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVolume2
});
export const SdsIconVolumeX = createComponent({
    tagName: 'sds-icon-volume-x',
    elementClass: SdsIconVolumeXElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconVolumeX
});
export const SdsIconWatch = createComponent({
    tagName: 'sds-icon-watch',
    elementClass: SdsIconWatchElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconWatch
});
export const SdsIconWifi = createComponent({
    tagName: 'sds-icon-wifi',
    elementClass: SdsIconWifiElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconWifi
});
export const SdsIconWifiOff = createComponent({
    tagName: 'sds-icon-wifi-off',
    elementClass: SdsIconWifiOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconWifiOff
});
export const SdsIconWind = createComponent({
    tagName: 'sds-icon-wind',
    elementClass: SdsIconWindElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconWind
});
export const SdsIconX = createComponent({
    tagName: 'sds-icon-x',
    elementClass: SdsIconXElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconX
});
export const SdsIconXCircle = createComponent({
    tagName: 'sds-icon-x-circle',
    elementClass: SdsIconXCircleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconXCircle
});
export const SdsIconXOctagon = createComponent({
    tagName: 'sds-icon-x-octagon',
    elementClass: SdsIconXOctagonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconXOctagon
});
export const SdsIconXSquare = createComponent({
    tagName: 'sds-icon-x-square',
    elementClass: SdsIconXSquareElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconXSquare
});
export const SdsIconYoutube = createComponent({
    tagName: 'sds-icon-youtube',
    elementClass: SdsIconYoutubeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconYoutube
});
export const SdsIconZap = createComponent({
    tagName: 'sds-icon-zap',
    elementClass: SdsIconZapElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconZap
});
export const SdsIconZapOff = createComponent({
    tagName: 'sds-icon-zap-off',
    elementClass: SdsIconZapOffElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconZapOff
});
export const SdsIconZoomIn = createComponent({
    tagName: 'sds-icon-zoom-in',
    elementClass: SdsIconZoomInElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconZoomIn
});
export const SdsIconZoomOut = createComponent({
    tagName: 'sds-icon-zoom-out',
    elementClass: SdsIconZoomOutElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsIconZoomOut
});
export const SdsImage = createComponent({
    tagName: 'sds-image',
    elementClass: SdsImageElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsImage
});
export const SdsInput = createComponent({
    tagName: 'sds-input',
    elementClass: SdsInputElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsInput
});
export const SdsInputField = createComponent({
    tagName: 'sds-input-field',
    elementClass: SdsInputFieldElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsInputField
});
export const SdsKeyboard = createComponent({
    tagName: 'sds-keyboard',
    elementClass: SdsKeyboardElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsKeyboard
});
export const SdsLabel = createComponent({
    tagName: 'sds-label',
    elementClass: SdsLabelElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsLabel
});
export const SdsLegend = createComponent({
    tagName: 'sds-legend',
    elementClass: SdsLegendElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsLegend
});
export const SdsLink = createComponent({
    tagName: 'sds-link',
    elementClass: SdsLinkElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsLink
});
export const SdsListBox = createComponent({
    tagName: 'sds-list-box',
    elementClass: SdsListBoxElement,
    react: React,
    events: { onSdsSelect: 'sds-select' },
    defineCustomElement: defineSdsListBox
});
export const SdsListBoxItem = createComponent({
    tagName: 'sds-list-box-item',
    elementClass: SdsListBoxItemElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsListBoxItem
});
export const SdsLogo = createComponent({
    tagName: 'sds-logo',
    elementClass: SdsLogoElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsLogo
});
export const SdsPicture = createComponent({
    tagName: 'sds-picture',
    elementClass: SdsPictureElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsPicture
});
export const SdsSelect = createComponent({
    tagName: 'sds-select',
    elementClass: SdsSelectElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsSelect
});
export const SdsSelectField = createComponent({
    tagName: 'sds-select-field',
    elementClass: SdsSelectFieldElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsSelectField
});
export const SdsSelectItem = createComponent({
    tagName: 'sds-select-item',
    elementClass: SdsSelectItemElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsSelectItem
});
export const SdsSlider = createComponent({
    tagName: 'sds-slider',
    elementClass: SdsSliderElement,
    react: React,
    events: {
        onSdsChange: 'sds-change',
        onSdsInput: 'sds-input'
    },
    defineCustomElement: defineSdsSlider
});
export const SdsTab = createComponent({
    tagName: 'sds-tab',
    elementClass: SdsTabElement,
    react: React,
    events: {
        onSdsTabClick: 'sds-tab-click',
        onSdsTabNext: 'sds-tab-next',
        onSdsTabPrevious: 'sds-tab-previous'
    },
    defineCustomElement: defineSdsTab
});
export const SdsTabPanel = createComponent({
    tagName: 'sds-tab-panel',
    elementClass: SdsTabPanelElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTabPanel
});
export const SdsTabs = createComponent({
    tagName: 'sds-tabs',
    elementClass: SdsTabsElement,
    react: React,
    events: { onSdsTabsSelected: 'sds-tabs-selected' },
    defineCustomElement: defineSdsTabs
});
export const SdsTag = createComponent({
    tagName: 'sds-tag',
    elementClass: SdsTagElement,
    react: React,
    events: { onRemoved: 'removed' },
    defineCustomElement: defineSdsTag
});
export const SdsTagButton = createComponent({
    tagName: 'sds-tag-button',
    elementClass: SdsTagButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTagButton
});
export const SdsText = createComponent({
    tagName: 'sds-text',
    elementClass: SdsTextElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsText
});
export const SdsTextCode = createComponent({
    tagName: 'sds-text-code',
    elementClass: SdsTextCodeElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextCode
});
export const SdsTextContentHeading = createComponent({
    tagName: 'sds-text-content-heading',
    elementClass: SdsTextContentHeadingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextContentHeading
});
export const SdsTextContentTitle = createComponent({
    tagName: 'sds-text-content-title',
    elementClass: SdsTextContentTitleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextContentTitle
});
export const SdsTextEmphasis = createComponent({
    tagName: 'sds-text-emphasis',
    elementClass: SdsTextEmphasisElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextEmphasis
});
export const SdsTextHeading = createComponent({
    tagName: 'sds-text-heading',
    elementClass: SdsTextHeadingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextHeading
});
export const SdsTextInput = createComponent({
    tagName: 'sds-text-input',
    elementClass: SdsTextInputElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextInput
});
export const SdsTextLink = createComponent({
    tagName: 'sds-text-link',
    elementClass: SdsTextLinkElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextLink
});
export const SdsTextLinkList = createComponent({
    tagName: 'sds-text-link-list',
    elementClass: SdsTextLinkListElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextLinkList
});
export const SdsTextList = createComponent({
    tagName: 'sds-text-list',
    elementClass: SdsTextListElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextList
});
export const SdsTextListItem = createComponent({
    tagName: 'sds-text-list-item',
    elementClass: SdsTextListItemElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextListItem
});
export const SdsTextPrice = createComponent({
    tagName: 'sds-text-price',
    elementClass: SdsTextPriceElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextPrice
});
export const SdsTextSmall = createComponent({
    tagName: 'sds-text-small',
    elementClass: SdsTextSmallElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextSmall
});
export const SdsTextSmallStrong = createComponent({
    tagName: 'sds-text-small-strong',
    elementClass: SdsTextSmallStrongElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextSmallStrong
});
export const SdsTextStrong = createComponent({
    tagName: 'sds-text-strong',
    elementClass: SdsTextStrongElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextStrong
});
export const SdsTextSubheading = createComponent({
    tagName: 'sds-text-subheading',
    elementClass: SdsTextSubheadingElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextSubheading
});
export const SdsTextSubtitle = createComponent({
    tagName: 'sds-text-subtitle',
    elementClass: SdsTextSubtitleElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextSubtitle
});
export const SdsTextTitleHero = createComponent({
    tagName: 'sds-text-title-hero',
    elementClass: SdsTextTitleHeroElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextTitleHero
});
export const SdsTextTitlePage = createComponent({
    tagName: 'sds-text-title-page',
    elementClass: SdsTextTitlePageElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsTextTitlePage
});
export const SdsToggleTag = createComponent({
    tagName: 'sds-toggle-tag',
    elementClass: SdsToggleTagElement,
    react: React,
    events: { onToggle: 'toggle' },
    defineCustomElement: defineSdsToggleTag
});
export const SdsToggleTagGroup = createComponent({
    tagName: 'sds-toggle-tag-group',
    elementClass: SdsToggleTagGroupElement,
    react: React,
    events: {},
    defineCustomElement: defineSdsToggleTagGroup
});
export const SdsToggleTagList = createComponent({
    tagName: 'sds-toggle-tag-list',
    elementClass: SdsToggleTagListElement,
    react: React,
    events: { onTogglesUpdated: 'togglesUpdated' },
    defineCustomElement: defineSdsToggleTagList
});
//# sourceMappingURL=components.js.map