import '../index.css'
import '../js/button.js'
import '../js/theme.js'

document.querySelector('#app').innerHTML = `
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
`

document.querySelector('#theme-switch').innerHTML = `
    <theme-switcher></theme-switcher>
`

document.querySelector('#card').innerHTML = `
<article> 
    <header class="display1 m-bottom__s"> Header </header>
    I am a card! 
    <footer> footer </footer>
</article>
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

<div style="height: 10px"></div>
<golden-button theme="bg-secondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-tertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-error large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-warning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-info large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-success large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large text" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-surfacecontainerhighest large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerhigh large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacebright large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-surfacecontainerlowest large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-inversesurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 100px"></div>
<golden-button theme="bg-primarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-secondarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-tertiarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiarycontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-errorcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerrorcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-warningcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarningcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-infocontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfocontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-successcontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccesscontainer large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<div class="title1">Fixed</div>
<golden-button theme="bg-ontertiaryfixed large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiaryfixedvariant large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<div style="height: 10px"></div>
<golden-button theme="bg-onprimaryfixed large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimaryfixedvariant large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
`
/*  Article: data-type: horizontal, vertical
 *  Style header, footer
 *
 *
 * */
