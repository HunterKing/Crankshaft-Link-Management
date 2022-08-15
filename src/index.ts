import { SMM } from '@crankshaft/types';

const deleteAll = (selector: string) =>
  document.querySelectorAll(selector).forEach((node) => node.remove());

const getLinkElement = (item: HTMLElement) => {
  console.log(item);
  var actual_text = item.firstElementChild?.firstElementChild?.firstElementChild;
  actual_text = <HTMLElement>actual_text;
  //var actual_text = item.firstChild?.firstChild?.firstChild;
  actual_text.innerHTML = "hello"; 
  return item;
};

const createNewLink = (item: HTMLElement, newname: string, targeturl: string) => {
  var newitem = item.cloneNode(true);
  console.log("New Item!!");
  console.log(newitem);
  console.log(newitem);

  return newitem;
  return(
    <div class="appdetailsprimarylinkssection_LinkInner_7k4qm" style="opacity: 0; pointer-events: none; z-index: -100;" tabindex="7">
      <a class="appdetailsprimarylinkssection_Anchor_DY4_w Focusable" href="https://store.steampowered.com/app/13240?snr=5000_5100___primarylinks">
        <div class="appdetailsprimarylinkssection_Link_1b6LY">
          <span class="appdetailsprimarylinkssection_Text_2sNDj">Store Page
          </span>
        </div>
      </a>
    </div>
  
};

export const load = (smm: SMM) => {
  const linkDbCache: Record<string, any> = {};

  smm.addEventListener('switchToAppDetails', async (event: any) => {
    //Try and clean up before putting some new stuff in.
    //deleteAll('[data-smm-links]');

    //Grab the App ID and App Name for the targeted selection and print.
    const { appId, appName } = event.detail;
    console.log("[link-management] " + appId + " " + appName);

    // Some experimentation with Shared Selector regions; This might be good to push upstream after playing around with it.
    // Section next to play button -- Cloud Status / Last Played / Play Time / Etc.
    const appStats = '[class^=appdetailsplaysection_GameStatsSection]';
    //console.log(document.querySelector(appStats));

    // Section directly under play button - all urls.
    const appLinks = '[class^=appdetailsprimarylinkssection_Links]';
    //console.log(document.querySelector(appLinks));
    var link_list = document.querySelector(appLinks)?.children;
    const yoinkma = link_list[0];
    const test = getLinkElement(yoinkma);
    const example = createNewLink(yoinkma, "Hello", `https://google.com/${appName}` );

    //document.querySelector(appLinks)?.appendChild(example);
    //console.log(getLinkElement(yoinkma));

    //console.log(link_list[0]);
    
    //document.querySelector(appLinks)?.appendChild()

    // Section where properties gear button, show more details button are.
    const appActions = '[class^=appdetailsplaysection_AppButtonsContainer]';
    //console.log(document.querySelector(appActions));

  });
};

export const unload = (smm: SMM) => {
  console.info('Template plugin unloaded!');
};

