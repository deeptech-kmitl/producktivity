import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Button, Box } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';

export default component$(() => {
  useStylesScoped$(`
  h1 {
  font-weight: 600;
  font-size: 52px;
  background: linear-gradient(90.22deg, #5FAEE6 0.19%, #89BEA7 90.99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .color-button {
    /* Button */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 8px;
  height: 37px;

  /* gradient 01 */
  background: linear-gradient(90.22deg, #5FAEE6 0.19%, #89BEA7 90.99%);
  border-radius: 30px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  }
  .seemore-button{
    /* Button */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 8px;
  width: 131px;
  height: 48px;
  /* teal/500 */
  background: #319795;
  border-radius: 6px;
  }
  .create-button{
    /* Button */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 8px;

  width: 286px;
  height: 56px;

  /* blue/500 */
  background: #3182CE;
  border-radius: 6px;

  }
  .grid {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    position: relative;
    width: 300px;
    height: 175px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin: 10px;
  }
`);

  return (
    <div style={{ overflowY: 'auto', width: '100vw', backgroundColor: '#F4F4F4' }}>
      <Box height="quarter" width="full" align="bottom"></Box>
      <Box gap="1" height="half" width="full" align="center">
        {/* <Text bold variant="hero"> */}
        <h1>Welcome to Certificate Generators</h1>
        {/* </Text> */}
        <h2 style={{ color: '#89BEA7' }}>Create and customize your own certificate in just a few clicks.</h2>
          {/* <Button class="color-button" rounded prefetch href="/sign-up"> */}
          <a class="color-button" href="/dashboard">
            <p style={{ color: 'white' }}>Get Started</p>
          </a>
          {/* </Button> */}
      </Box>
      <Box gap='1' height="quarter" width="full" align="bottom" paddingBottom='1'>
        <p style={{color:"#5FAEE6"}}>How it works?</p>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5625 8.5C14.5625 10.2405 13.8711 11.9097 12.6404 13.1404C11.4097 14.3711 9.74048 15.0625 8 15.0625C6.25952 15.0625 4.59032 14.3711 3.35961 13.1404C2.1289 11.9097 1.4375 10.2405 1.4375 8.5C1.4375 6.75952 2.1289 5.09032 3.35961 3.85961C4.59032 2.6289 6.25952 1.9375 8 1.9375C9.74048 1.9375 11.4097 2.6289 12.6404 3.85961C13.8711 5.09032 14.5625 6.75952 14.5625 8.5ZM0.5 8.5C0.5 10.4891 1.29018 12.3968 2.6967 13.8033C4.10322 15.2098 6.01088 16 8 16C9.98912 16 11.8968 15.2098 13.3033 13.8033C14.7098 12.3968 15.5 10.4891 15.5 8.5C15.5 6.51088 14.7098 4.60322 13.3033 3.1967C11.8968 1.79018 9.98912 1 8 1C6.01088 1 4.10322 1.79018 2.6967 3.1967C1.29018 4.60322 0.5 6.51088 0.5 8.5ZM7.53125 5.21875C7.53125 5.09443 7.58064 4.9752 7.66854 4.88729C7.75645 4.79939 7.87568 4.75 8 4.75C8.12432 4.75 8.24355 4.79939 8.33146 4.88729C8.41936 4.9752 8.46875 5.09443 8.46875 5.21875V10.6497L10.4806 8.63688C10.5686 8.54886 10.688 8.49941 10.8125 8.49941C10.937 8.49941 11.0564 8.54886 11.1444 8.63688C11.2324 8.72489 11.2818 8.84427 11.2818 8.96875C11.2818 9.09323 11.2324 9.21261 11.1444 9.30062L8.33187 12.1131C8.28833 12.1568 8.23661 12.1914 8.17966 12.215C8.12271 12.2387 8.06166 12.2508 8 12.2508C7.93834 12.2508 7.87729 12.2387 7.82034 12.215C7.7634 12.1914 7.71167 12.1568 7.66813 12.1131L4.85563 9.30062C4.76761 9.21261 4.71816 9.09323 4.71816 8.96875C4.71816 8.84427 4.76761 8.72489 4.85563 8.63688C4.94364 8.54886 5.06302 8.49941 5.1875 8.49941C5.31198 8.49941 5.43136 8.54886 5.51937 8.63688L7.53125 10.6497V5.21875Z" fill="#5FAEE6" stroke="#5FAEE6" />
        </svg>
      </Box>
      <Box gap="1" height="full" width="full" align="center" paddingTop="10">
        {/* <Text bold variant="hero">
          What our customer say
        </Text> */}
        <h1>What our customer say</h1>
        <div class="grid">
          {[...Array(9)].map((_, index) => (
            <div key={index} class="card">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Box align="center" paddingTop="1">
                  <div style={{ width: '64px', height: '64px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)', marginBottom: '10px' }}></div>
                  <Text>"The certificate generator is so easy to use and the results are amazing!"</Text>
                  <Text bold>- John Doe</Text>
                </Box>
              </div>
            </div>
          ))}
        </div>
        <Box paddingBottom="1">
          {/* <Button variant="primary">See more</Button> */}
          <a href="" class="seemore-button">
            <p style={{ color: 'white', fontSize: '18px' }}>See more</p>
          </a>
        </Box>
      </Box>
      <Box gap="2" height="full" align="center">
        {/* <Text bold variant="hero">
          Ready to get started?
        </Text> */}
        <h1>Ready to get started?</h1>
        {/* <Button variant="primary"></Button> */}
        <a href="" class="create-button">
          <p style={{ color: 'white', fontSize: '18px' }}>Create Your Certificate</p>
        </a>
      </Box>
    </div>
  );
});

export const head: DocumentHead = generateSeoConfig();
