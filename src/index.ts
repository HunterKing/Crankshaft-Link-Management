import { SMM } from '@crankshaft/types';

const deleteAll = (selector: string) =>
  document.querySelectorAll(selector).forEach((node) => node.remove());

export const load = (smm: SMM) => {
  const linkDbCache: Record<string, any> = {};

  smm.addEventListener('switchToAppDetails', async (event: any) => {
    //Try and clean up before putting some new stuff in.
    deleteAll('[data-smm-links]');

    //Grab the App ID and App Name for the targeted selection and print.
    const { appId, appName } = event.detail;
    console.log(appId + " " + appName);

    // Some experimentation with Shared Selector regions; This might be good to push upstream after playing around with it.
    // Section next to play button -- Cloud Status / Last Played / Play Time / Etc.
    const appStats = '[class^=appdetailsplaysection_StatusAndStats]';
    console.log(document.querySelector(appStats));


    // Section directly under play button - all urls.
    const appLinks = '[class^=appdetailssection_Body]';
    console.log(document.querySelector(appLinks));

    // Section where properties gear button, show more details button are.
    const appActions = '[class^=appdetailsplaysection_RightControls]';
    console.log(document.querySelector(appActions));

  });
};

export const unload = (smm: SMM) => {
  console.info('Template plugin unloaded!');
};

