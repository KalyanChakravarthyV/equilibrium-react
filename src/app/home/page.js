'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Theme,
} from '@carbon/react';
import {
  Advocate,
  Globe,
  AcceleratingTransformation,
} from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';
import Image from 'next/image';

import zipy from 'zipyai';
zipy.init(process.env.ZIPAI_KEY);

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="https://github.com/KalyanChakravarthyV/equilibrium-react/wiki">
              Getting started
            </a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Equilibrium</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">
                    What is Equilibrium?
                  </h2>
                  <p className="landing-page__p">
                    Project Equilibrium is a fully open source rich set of tools
                    for IBM TRIRIGA
                    <br />
                  </p>
                  <p className="landing-page__p">
                    Navigate through burger menu or the menu links
                  </p>

                  <ul style={{ marginLeft: 6, fontSize: 20 }}>
                    <li style={{ padding: 6 }}>
                      Finder: Working on translations or need to download the OM
                      packages? Download the entire directory as a zip file
                      <br />
                    </li>

                    <li style={{ padding: 6 }}>
                      $QL Editor: Comparing versions for upgrades? Export
                      multiple SQL queries directly to .xlsx file in one-go{' '}
                      <br />
                    </li>
                    <li style={{ padding: 6 }}>
                      $KryptOn: Unlease the power of server-side JavaScript!
                      <br />
                    </li>
                  </ul>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  Built using ReactJS with Carbon-Design System, Equilibrium is
                  powered by ClassLoader and robust APIs delivered with IConnect
                  All bundled as a single OM package for you to get started
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  Like to contribute? Visit{' '}
                  <a
                    href="https://github.com/KalyanChakravarthyV/Equilibrium-React"
                    target="blank">
                    GitHub
                  </a>
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      {/* Commenting out the footer */}
      {/* <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles" className="landing-page__r3">
          <InfoCard
            heading="Carbon is Open"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={() => <Advocate size={32} />}
          />
          <InfoCard
            heading="Carbon is Modular"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={() => <AcceleratingTransformation size={32} />}
          />
          <InfoCard
            heading="Carbon is Consistent"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column> */}
    </Grid>
  );
}
