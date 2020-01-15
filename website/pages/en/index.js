/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {/* {siteConfig.title} */}
        <img src={siteConfig.darkLogoPNG} alt="Project Logo" width="500px"/>
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://arxiv.org/abs/1910.02653">Paper</Button>
            <Button href="https://github.com/parasj/checkmate">Github</Button>
            <Button href="/docs/tutorials_home">Tutorials</Button>
            <Button href="/docs/docs_home">Documentation</Button>
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const MemoryGrowing = () => (
      <Block background="light">
        {[
          {
            content:
              '<ul><li>Deep learning architectures increasingly require more memory. Researchers cite memory limits as a pain-point limiting progress in deep learning.</li><li>Hardware is struggling to keep up with the memory requirements for the latest models. DRAM density improvements are slowing rapidly due to the end of Dennard scaling and Moore\'s law.</li><li>Per-layer activations remain the dominant consumer of GPU DRAM.</li></ul>',
            image: `${baseUrl}img/homepage_story/1_model_memory.svg`,
            imageAlign: 'right',
            title: 'Neural networks are bigger than ever.',
          },
        ]}
      </Block>
    );

    const RecomputationIdea = () => (
      <Block background="light">
        {[
          {
            content:
              '<ul><li>If we try to evaluate this 3-layer DNN, we will run out-of-memory.</li><li>CheckMate will discard the result of layer B at timestep 3, thus freeing enough memory for training to continue</li><li>Layer B is recomputed again at timestep 5, just in time for the corresponding gradient operation.</li></ul>',
            image: `${baseUrl}img/homepage_story/2_illustrated_example.svg`,
            imageAlign: 'left',
            title: 'CheckMate squeezes big networks into small DRAM capacities by recomputing parts of your neural net\'s graph.',
          },
        ]}
      </Block>
    );

    const MaxBS = () => (
      <Block background="light">
        {[
          {
            image: `${baseUrl}img/homepage_story/3_maxbs.svg`,
            imageAlign: 'left',
            title: 'CheckMate can help train up to 4.9x larger neural networks on today\'s GPUs.',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <MemoryGrowing />
          <RecomputationIdea />
          <MaxBS />
        </div>
      </div>
    );
  }
}

module.exports = Index;
