import '../index.css'
import '../js/theme.js'

document.querySelector('#app').innerHTML = `
<div class="grid">
  <div>
    <div class="display1">Display 1</div>
    <div class="display2">Display 2</div>
    <div class="title1">Title 1</div>
    <div class="title2">Title 2</div>
    <div class="title3">Title 3</div>
    <div class="heading">Heading</div>
    <div class="subheading">Subheading</div>
    <div class="body">Body</div>
    <div class="callout">Callout</div>
    <div class="label">Label</div>
    <div class="caption">Caption</div>
    <div class="overline">Overline</div>
  </div>
  <div>
    <h1 class="display1__bold">Display 1</h1>
    <p class="display2__bold ">Display 2</p>
    <p class="title1__bold ">Title 1</p>
    <p class="title2__bold">Title 2<p>
    <p class="title3__bold">Title 3</p>
    <p class="heading__bold">Heading</p>
    <p class="subheading__bold">Subheading</p>
    <p class="body__bold">Body text</p>
    <p class="callout__bold">Callout</p>
    <p class="label__bold">Label</p>
    <p class="caption__bold">Caption</p>
    <p class="overline__bold">Overline</p>
  </div>
</div>
`

document.querySelector('#theme-switch').innerHTML = `
    <theme-switcher></theme-switcher>
`

document.querySelector('#card').innerHTML = `
<div class="flow__sm">
<div class="card scalefactor__display1 bg-primary">
    <p class="display1__bold m-bottom__xs">Display 1</p>
    <div class="util__caption">.card.scaleFactor__display1</div>
</div>
<div class="card scalefactor__display2 bg-primary">
    <p class="display2__bold m-bottom__xs">Display 2</p>
    <div class="util__caption">.card.scaleFactor__display2</div>
</div>

<div class="card scalefactor__title1 bg-primary">
    <p class="title1__bold m-bottom__xs">Title 1</p>
    <div class="util__caption">.card.scaleFactor__title1</div>
</div>
<div class="card scalefactor__title2 bg-primary">
    <p class="title2__bold m-bottom__xs">Title 2</p>
    <div class="util__caption">.card.scaleFactor__title2</div>
</div>

<div class="card scalefactor__title3 bg-primary">
    <p class="title3__bold m-bottom__xs">Title 3</p>
    <div class="util__caption">.card.scaleFactor__title3</div>
</div>

<div class="card scalefactor__heading bg-primary">
    <p class="heading__bold m-bottom__xs">Heading</p>
    <div class="util__caption">.card.scaleFactor__heading</div>
</div>

<div class="card scalefactor__subheading bg-primary">
    <p class="subheading__bold m-bottom__xs">Subheading</p>
    <div class="util__caption">.card.scaleFactor__subheading</div>
</div>

<div class="card scalefactor__body bg-primary">
    <p class="body__bold m-bottom__xs">Body</p>
    <div class="util__caption">.card.scaleFactor__body</div>
</div>

<div class="card scalefactor__callout bg-primary">
    <p class="callout__bold m-bottom__xs">Callout</p>
    <div class="util__caption">.card.scaleFactor__callout</div>
</div>

<div class="card scalefactor__label bg-primary">
    <p class="label__bold m-bottom__xs">Label</p>
    <div class="util__caption">.card.scaleFactor__label</div>
</div>

<div class="card scalefactor__overline bg-primary clickable">
    <div class="state-layer"></div>
    <p class="overline__bold m-bottom__xs">Overline</p>
    <div class="util__caption">.card.scaleFactor__overline.clickable</div>
</div>

<div class="card scalefactor__heading bg-onprimary outline">
    <p class="heading__bold m-bottom__xs">Heading</p>
    <div class="util__caption">.card.scaleFactor__heading.outline</div>
</div>

<div class="card scalefactor__heading bg-onprimary text">
    <p class="heading__bold m-bottom__xs">Overline</p>
    <div class="util__caption">.card.scaleFactor__heading.text</div>
</div>

<div class="card scalefactor__heading bg-onprimary text clickable">
    <div class="state-layer"></div>
    <p class="heading__bold m-bottom__xs">Overline</p>
    <div class="util__caption">.card.scaleFactor__heading.text.clickable</div>
</div>
</div>
`

let colors = [
    "bg-primary",
    "bg-onprimary",
    "bg-primarycontainer",
    "bg-onprimarycontainer",
    "bg-secondary",
    "bg-onsecondary",
    "bg-secondarycontainer",
    "bg-onsecondarycontainer",
    "bg-tertiary",
    "bg-ontertiary",
    "bg-tertiarycontainer",
    "bg-ontertiarycontainer",
    "bg-error",
    "bg-onerror",
    "bg-errorcontainer",
    "bg-onerrorcontainer",
    "bg-background",
    "bg-onbackground",
    "bg-surface",
    "bg-onsurface",
    "bg-surfacevariant",
    "bg-onsurfacevariant",
    "bg-outline",
    "bg-outlinevariant",
    "bg-inversesurface",
    "bg-inverseonsurface",
    "bg-inverseprimary",
    "bg-success",
    "bg-successcontainer",
    "bg-onsuccess",
    "bg-onsuccesscontainer",
    "bg-warning",
    "bg-warningcontainer",
    "bg-onwarning",
    "bg-onwarningcontainer",
    "bg-info",
    "bg-infocontainer",
    "bg-oninfo",
    "bg-oninfocontainer",
    "bg-primaryfixed",
    "bg-primaryfixeddim",
    "bg-onprimaryfixed",
    "bg-onprimaryfixedvariant",
    "bg-secondaryfixed",
    "bg-secondaryfixeddim",
    "bg-onsecondaryfixed",
    "bg-onsecondaryfixedvariant",
    "bg-tertiaryfixed",
    "bg-tertiaryfixeddim",
    "bg-ontertiaryfixed",
    "bg-ontertiaryfixedvariant",
    "bg-surfacedim",
    "bg-surfacebright",
    "bg-surfacecontainerlowest",
    "bg-surfacecontainerlow",
    "bg-surfacecontainer",
    "bg-surfacecontainerhigh",
    "bg-surfacecontainerhighest",
    "bg-shadow",
    "bg-scrim",
]
var innerColors = `<style>
    .swab {
        position: relative;
        padding: var(--md);
    }
</style>
<div class="title1">Colors</div>
<div class=\"grid col__4\">
`
for (let i in colors) {
    innerColors += `
<div class=\"${colors[i]}\ swab"> 
    <div class="state-layer"></div>
    <div class="button__content"> ${colors[i]} </div>
</div>
`
}
innerColors += "</div>"

document.querySelector('#colors').innerHTML = innerColors

document.querySelector('#button').innerHTML = `
<div class="display__flex-h">
    <a class="button bg-primary">
        <div class="state-layer"></div>
        Back
    </a>
    <a class="button bg-primary start-icon">
        <div class="state-layer"></div>
        <div class="material-symbols-filled">arrow_forward</div>
        Back
    </a>
    <a class="button bg-primary start-icon end-icon">
        <div class="state-layer"></div>
        <div class="material-symbols-filled">home</div>
        Back
        <div class="material-symbols-filled">arrow_forward</div>
    </a>
</div>

<div class="display__flex-h">
    <a class="button bg-primary large">
        <div class="state-layer"></div>
        Back
    </a>
    <a class="button bg-primary large start-icon">
        <div class="state-layer"></div>
        <div class="material-symbols-filled">arrow_forward</div>
        Back
    </a>
    <a class="button bg-primary large start-icon end-icon">
        <div class="state-layer"></div>
        <div class="material-symbols-filled">arrow_forward</div>
        Back
        <div class="material-symbols-filled">home</div>
    </a>
</div>
`
/*  Article: data-type: horizontal, vertical
 *  Style header, footer
 *
 * TODO:
 * Table
 * pie chart
 * tab menu
 * dropdown 
 * tooltip
 * navbar
 * input (search)
 * text link
 * side menu
 * separation lines
 * icons
 * block quote
 * menu for customizing (download updated css)
 * copy 
 * table of content
 * accordion
 * label 
 * snack bar
 * role="group"
 * loading
 * modal
 * progress
 * validation state
 * file input 
 * date input
 * textarea
 * */

document.querySelector('#checkbox').innerHTML = `
<fieldset>
  <legend>Language preferences:</legend>
  <label>
    <input type="checkbox" name="english" checked />
    English
  </label>
  <label>
    <input type="checkbox" name="french" checked />
    French
  </label>
  <label>
    <input type="checkbox" name="mandarin" />
    Mandarin
  </label>
  <label>
    <input type="checkbox" name="thai" />
    Thai
  </label>
  <label aria-disabled="true">
    <input type="checkbox" name="dothraki" disabled />
    Dothraki
  </label>
</fieldset>

<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label for="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label for="swahili">Swahili</label>
  <input type="checkbox" id="navi" name="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`

document.querySelector('#radio').innerHTML = `
<fieldset>
  <legend>Language preference:</legend>
  <label>
    <input type="radio" name="language" checked />
    English
  </label>
  <label>
    <input type="radio" name="language" />
    French
  </label>
  <label>
    <input type="radio" name="language" />
    Mandarin
  </label>
  <label>
    <input type="radio" name="language" />
    Thai
  </label>
  <label aria-disabled="true">
    <input type="radio" name="language" disabled />
    Dothraki
  </label>
</fieldset>

<fieldset>
  <legend>Language preference:</legend>
  <input id="english" type="radio" name="language2" checked />
  <label for="english">English</label>
  <input id="french" type="radio" name="language2" />
  <label for="french"> French </label>
  <input id="mandarin" type="radio" name="language2" />
  <label for="mandarin">Mandarin</label>
  <input id="thai" type="radio" name="language2" />
  <label for="thai">Thai</label>
  <input type="radio" name="language2" disabled />
  <label for="dothraki" aria-disabled="true">Dothraki</label>
</fieldset>
`
document.querySelector('#switch').innerHTML = `
<fieldset>
  <label class="display1 p-bottom__xs">
    <input name="terms" type="checkbox" role="switch"/>
    <div class="icons">
        <div class="material-symbols-filled">light_mode</div>
        <div class="material-symbols-filled">light_mode</div>
    </div>
    I agree to the Terms
  </label>
</fieldset>

<fieldset>
  <label class="display1 p-bottom__xs">
    <input name="terms" type="checkbox" role="switch"/>
    I agree to the Terms
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
    Receive news and offers
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
    Receive news and offers
    <div class="icons">
        <div class="material-symbols-filled">dark_mode</div>
        <div class="material-symbols-filled">light_mode</div>
    </div>
  </label>
</fieldset>
`


document.querySelector('#range').innerHTML = `
<label class="title2">
    Brightness
    <output id="brightness">25</output>
    <input type="range" oninput="brightness.value=value"/>
</label>
<label>
    Contrast
    <output id="contrast">25</output>
    <input type="range" value="25" oninput="contrast.value=value"/>
</label>
`

document.querySelector('#range').innerHTML = `
<textarea
  name="bio"
  placeholder="Write a professional short bio..."
  aria-label="Professional short bio"
>
</textarea>
<textarea name="disabled" disabled>
  Disabled
</textarea>
<textarea name="valid" placeholder="Valid" aria-invalid="false">
</textarea>
<textarea name="invalid" placeholder="Invalid" aria-invalid="true">
</textarea> 
`
