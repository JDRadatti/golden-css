import '../index.css'
import '../js/button.js'
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
    }
</style>
<div class="title1">Colors</div>
<div class=\"grid col__4\">
`
for (let i in colors) {
    innerColors += `
<div class=\"${colors[i]}\ swab"> 
    <div class="state-layer"></div>
    <div class="button__content">
        <span class="p-top__md p-bottom__md p-right__md">${colors[i]}</span>
    </div>
</div>
`
}
innerColors += "</div>"

document.querySelector('#colors').innerHTML = innerColors

document.querySelector('#button').innerHTML = `
<div style="height: 10px"></div>
<golden-button theme="bg-primary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimary large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-primarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-secondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-secondarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-tertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-tertiarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-error large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-errorcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerrorcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-warning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-warningcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarningcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-info large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-infocontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfocontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-success large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-successcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccesscontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-surfacecontainerhigh large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerhigh large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerhigh large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-inversesurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-surfacecontainerhigh large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerhigh large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerhigh large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-inversesurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
`
/*  Article: data-type: horizontal, vertical
 *  Style header, footer
 *
 * TODO:
 * Table
 * toggle(switch)
 * slider
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
 * range
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
  <label class="display1">
    <input name="terms" type="checkbox" role="switch" />
    I agree to the Terms
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
    Receive news and offers
  </label>
</fieldset>
`
