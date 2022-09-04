import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data = [
    {
      name: 'NO HIDDEN FEES',
      img: 'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png',
      url: 'https://www.amazon.com/',
    },
    {
      name: 'PERSONALIZED SHOPPING',
      img: 'https://www.highsnobiety.com/static-assets/thumbor/CXqJvCUzDF7gbCbT02CNg7e3o04=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2022/04/11112755/shein-main.jpg',
      url: 'https://us.shein.com/shein-picks.html',
    },
    {
      name: 'HASSLE FREE',
      img: 'https://www.androidauthority.com/wp-content/uploads/2015/05/Alibaba-logo.jpg',
      url: 'https://www.alibaba.com/?src=sem_ggl&from=sem_ggl&cmpgn=9922923052&adgrp=135429400533&fditm=&tgt=kwd-355409450865&locintrst=&locphyscl=1009016&mtchtyp=e&ntwrk=g&device=c&dvcmdl=&creative=593583292313&plcmnt=&plcmntcat=&p1=&p2=&aceid=&position=&localKeyword=aliabba&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTHKMKt99y6vgy1ZoSv97hfXIcdPQ_V7GHkBAnotaKaU61677QhH8qQaAitjEALw_wcB',
    },

    {
      name: 'AFFORDABLE RATES',
      img: 'https://www.logodesignlove.com/images/evolution/ebay-logo-01.jpg',
      url: 'https://www.ebay.com/',
    },

    {
      name: 'AFFORDABLE RATES',
      img: 'https://corporate.bestbuy.com/wp-content/uploads/2020/10/BBY_logo_blog_header_v01.jpg',
      url: 'https://www.bestbuy.com/',
    },
    {
      name: 'AFFORDABLE RATES',
      img: 'https://www.macys.com/img/nav/co_macysLogo3.gif',
      url: 'https://www.macys.com/?cm_mmc=Google_Trademark_International-_-Macys_Trademark_Jamaica_-_G_Macy%27sJamaica-_-355831837918-_-macy_e_c_kclickid__kenshoo_clickid__KID_478_94806814_4010733694_355831837918_kwd-111703273___c_KID_&trackingid=407x614607&m_sc=sem&m_sb=Google&m_tp=Text&m_ac=Google_Trademark_International&m_ag=Macy%27sJamaica&m_cn=Macys_Trademark_Jamaica_-_G&m_pi=go_cmp-94806814_adg-4010733694_ad-355831837918_kwd-111703273_dev-c_ext-_prd-&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTF1IJp3UcDSKdq2_Li3t16qqmzjOqRXonea1kBgxwt7bu7vLBE6dZ8aAmYyEALw_wcB',
    },
  ];
}
