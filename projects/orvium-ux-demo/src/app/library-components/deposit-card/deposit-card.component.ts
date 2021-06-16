import { Component } from '@angular/core';
import {
  ACCESS_RIGHT,
  CREDIT_TYPE,
  DEPOSIT_STATUS,
  DepositDTO,
  PUBLICATION_TYPE,
  REVIEW_TYPE
} from '../../../../../orvium-ux-lib/src/lib/model/api';

@Component({
  selector: 'app-deposit-card',
  templateUrl: './deposit-card.component.html',
  styleUrls: ['./deposit-card.component.scss']
})
export class DepositCardComponent {

  htmlCode = '<orv-deposit-card [deposit]="deposit"></orv-deposit-card>';
  deposit: DepositDTO = {
    _id: '123412341234',
    owner: 'antonio',
    nickname: 'nickname',
    title: 'Got Whey? The significance of cheese whey at the confluence of dairying, environmental impacts, energy and resource ' +
      'biorecovery',
    abstract: 'Milk discovery and processing enabled human settling and thriving in various settings. The discovery of cheese led to ' +
      'the production of whey as dairy by-product. Although it can find application in food, beverages, personal care products, ' +
      'pharmaceuticals and medical treatment, cheese whey is a massive dairying residue world-wide (154 Mm3·y-1) with high organic ' +
      'and nutrient loads. About 42% is used as low-value products as animal feed and fertilisers or even directly discharged in ' +
      'water ' +
      'streams, leading to ecosystem damage by eutrophication. Recycling and repurposing whey remains a challenge for remote ' +
      'locations ' +
      'and poor communities with limited access to expensive ' +
      'technology. Anaerobic digestion is proven and accessible for utilizing whey ' +
      'as substrate to produce biogas and/or carboxylates. Alternative processes combining anaerobic digestion and low-cost open ' +
      'photobioprocesses can foster the valorisation of cheese whey and capture of organics and nitrogen and phosphorus nutrients ' +
      'into a microalgal biomass that can be used as food and crop supply or processed into biofuels, pigments, antioxi-dants,' +
      ' among other value-added products. Awareness should be raised about the economic potential ' +
      'of cheese whey surplus by developing ' +
      'an action plan that (i) identifies stakeholders, (ii) sets goals and achieves solutions,' +
      ' (iii) decreases technology gaps among ' +
      'countries, (iv) enforces legislation and compliance, and (v) creates subsidies and foments ' +
      'partnerships with industries and other' +
      ' countries for the full valorisation of whey. We propose a closed-loop biorefinery implementation strategy to simultaneously ' +
      'mitigate environmental impacts and valorise whey resources.',
    comments: [],
    publicationType: PUBLICATION_TYPE.video,
    accessRight: ACCESS_RIGHT.CCBYND,
    publicationDate: '1968-11-16T00:00:00',
    status: DEPOSIT_STATUS.published,
    peerReviews: [],
    reviewType: REVIEW_TYPE.openReview,
    authors: [{ name: 'John', surname: 'Doe', orcid: 'https://orcid.org/0000-0000-0000-0000' }, { name: 'William', surname: 'Wallace' },
      {
        name: 'Sergio',
        surname: 'Rodriguez',
        email: 'example@orvium.io',
        orcid: 'https://orcid.org/0000-0000-0000-0000',
        credit: [CREDIT_TYPE.conceptualization, CREDIT_TYPE.formalAnalysis]
      }],
    keywords: ['science', 'cloud'],
    files: [],
    doi: '10.1000/182',
    disciplines: ['Abnormal psychology', 'Acoustics'],
    references: [],
    canBeReviewed: true,
    ownerProfile: {
      userId: 'antonio',
      firstName: 'Antonio',
      lastName: 'Romero',
      gravatar: '11111111111111111111111111111111',
      communities: [],
      institution: 'Orvium',
      nickname: 'antonio-romero'
    },
    actions: []
  };

  constructor() {
  }

}
