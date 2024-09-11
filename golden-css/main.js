import '../index.css'
import '../js/button.js'

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


document.querySelector('#card').innerHTML = `
<article> 
    <header class="display1 m-bottom__s"> Header </header>
    I am a card! 
    <footer> footer </footer>
</article>
`

document.querySelector('#button').innerHTML = `
<div style="height: 10px"></div>
<golden-button theme="bg-primary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onprimary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-secondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsecondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-tertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-ontertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-error large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onerror large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-warning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onwarning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-info large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-oninfo large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-success large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsuccess large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-surface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsurface large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-onsurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-inversesurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-inverseonsurface large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-inverseonsurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

`
/*  Article: data-type: horizontal, vertical
 *  Style header, footer
 *
 *
 * */
