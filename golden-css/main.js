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
    <h1 class="display1 ">Display 1</h1>
    <p class="display2 ">Display 2</p>
    <p class="title1 ">Title 1</p>
    <p class="title2 ">Title 2<p>
    <p class="title3 ">Title 3</p>
    <p class="heading ">Heading</p>
    <p class="subheading ">Subheading</p>
    <p class="body ">Body text</p>
    <p class="callout ">Callout</p>
    <p class="label ">Label</p>
    <p class="caption ">Caption</p>
    <p class="overline ">Overline</p>
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
<golden-button theme="bg-light__primary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onprimary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onprimary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__secondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsecondary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsecondary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__tertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__ontertiary large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__ontertiary large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__error large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onerror large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onerror large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__warning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onwarning large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onwarning large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__info large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__oninfo large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__oninfo large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__success large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsuccess large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsuccess large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__surface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsurface large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__onsurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

<div style="height: 10px"></div>
<golden-button theme="bg-light__inversesurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__inverseonsurface large outline" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>
<golden-button theme="bg-light__inverseonsurface large" start-icon="arrow_forward" end-icon="home" label="Label"></golden-button>

`
/*  Article: data-type: horizontal, vertical
 *  Style header, footer
 *
 *
 * */
