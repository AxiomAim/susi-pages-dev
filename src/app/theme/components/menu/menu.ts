import { Menu } from './menu.model';

export const horizontalMenuItems = [ 
    new Menu (1, 'Home', '/', null, null, false, 0, false),
    // Products
    new Menu (20, 'Products', '/products', null, null, true, 0, false), 
    new Menu (21, 'Adapter Series', null, null, null, true, 20, false), 
    new Menu (210, 'SWA (Flush Mount Panel)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1050-01-B%20Flush%20Mount%20Panel%20Adapters.pdf?alt=media&token=a2b15376-0c87-4801-9d87-4acfeba6e1d4', '_blank', false, 21, false), 
    new Menu (211, 'SWB (Surface Mount Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1100-01-B%20Surface%20Mount%20Panel%20Adapter.pdf?alt=media&token=59d32ca4-e4d0-47d8-8a6f-ca5cb1d98916', '_blank', false, 21, false), 
    new Menu (212, 'SWD (Retrofit Panel Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1500-03-B%20Retrofit%20Panel%20Adapters.pdf?alt=media&token=b1733f15-f21e-4917-bc45-a282e09bf017', '_blank', false, 21, false), 
    new Menu (213, 'SWF (Non-Case Surface Mount)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-3710-00-A%20SWF%20Surface%20Mount%20Panel%20Adapters.pdf?alt=media&token=de51d721-2c6c-4bb4-9244-974690c36b9f', '_blank', false, 21, false), 
    new Menu (214, 'SWI (Integrated Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1700-00-A%20Integrated%20Adapters.pdf?alt=media&token=7b46024e-93fe-4645-87bc-46b389968940', '_blank', false, 21, false), 
    new Menu (215, 'SWL (Retrofit Relay Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1800-00-E_SWL_%20retrofit_relay_adapters_schneider.pdf?alt=media&token=a5569031-7491-4a2b-9afd-89ecd6946e5b', '_blank', false, 21, false), 
    new Menu (216, 'SWR (Retrofit Socket Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1600-00-B%20Retrofit%20Socket%20Adapters.pdf?alt=media&token=de964cc8-da9e-4984-bc71-0c2a9a0cf51e', '_blank', false, 21, false),
    new Menu (217, 'PS (Panel Socket Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FAdapter%20Series%2F600-3001-10-A%20%20PS9%20SUSI.PDF?alt=media&token=1d79c7c6-86e7-4a84-b68d-edb950dd1a6e', '_blank', false, 21, false), 
    new Menu (22, 'Our Solutions', null, null, null, true, 20, false), 
    new Menu (220, 'Solutions Overview', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Four_solutions%2F600-1000-02-E%20Solution%20to%20Panel%20Metering.pdf?alt=media&token=d035e223-9ebb-4e81-9698-630e4a971791', '_blank', false, 22, true), 
    new Menu (221, 'Utility', 'applications-utility', null, null, false, 22, false), 
    new Menu (221, 'Industrial', 'applications-industrial', null, null, false, 22, false), 
    new Menu (221, 'Commercial', 'applications-commercial', null, null, false, 22, false), 
    new Menu (221, 'Universities', 'applications-universities', null, null, false, 22, false), 
    new Menu (25, 'Pictures', '/support/pictures', null, null, false, 20, false), 
    new Menu (24, 'Portable Load Boxes', null, null, null, true, 20, false), 
    new Menu (240, 'LB-50 (Form 1, 2 12)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FPortable%20Load%20Boxes%2F600-3050-00-B%20Brochure%20LB-50-M.pdf?alt=media&token=58da43d2-a1bf-44c4-bd35-fa55c771c9cf', '_blank', false, 24, false), 
    new Menu (241, 'LB-300 (Form 5,9)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FPortable%20Load%20Boxes%2F600-3000-00-B%20Load%20Box.pdf?alt=media&token=5d752adc-4866-4e17-937d-c742c9bc3546', '_blank', false, 24, false), 
    new Menu (25, 'Selection Guides', '/support/selection-guides', null, null, false, 20, false), 
    // Partners
    new Menu (40, 'Partners', '/partners', null, null, true, 0, false), 
    new Menu (41, 'All Partners', '/partners', null, '_blank', false, 40, true), 
    new Menu (42, 'AccuEnergy', null, 'http://accuenergyadapters.com/', '_blank', false, 40, false), 
    new Menu (43, 'Aclara', null, 'http://aclaraadapters.com/', '_blank', false, 40, false), 
    new Menu (44, 'Ametek', null, 'http://ametekadapters.com/index.php/ametek', '_blank', false, 40, false), 
    new Menu (45, 'Bitronics', null, 'http://bitronicsadapters.com/', '_blank', false, 40, false), 
    new Menu (46, 'Crompton', null, 'http://cromptonadapters.com/', '_blank', false, 40, false), 
    new Menu (47, 'Eaton', null, 'http://eatonadapters.com/', '_blank', false, 40, false), 
    new Menu (48, 'Electro Industries', null, 'http://electroindadapters.com/', '_blank', false, 40, false), 
    new Menu (49, 'Elster', null, 'http://elsteradapters.com/', '_blank', false, 40, false), 
    new Menu (50, 'GE', null, 'http://geadapters.com/', '_blank', false, 40, false), 
    new Menu (51, 'Itron', null, 'http://itronadapters.com/', '_blank', false, 40, false), 
    new Menu (52, 'Landis+Gyr', null, 'http://landisgyradapters.com/', '_blank', false, 40, false), 
    new Menu (53, 'Rockwell Automation', null, 'http://raadapters.com/', '_blank', false, 40, false), 
    new Menu (54, 'Satec', null, 'http://satecadapters.com/', '_blank', false, 40, false), 
    new Menu (55, 'Schneider Electric', null, 'http://schneideradapters.com/', '_blank', false, 40, false), 
    new Menu (56, 'Siemens', null, 'http://siemensadapters.com/', '_blank', false, 40, false), 
    // How to buy
    new Menu (60, 'How to Buy', '/partners', null, null, true, 0, false), 
    new Menu (61, 'Distributors', '/distributors', null, '_blank', false, 60, false), 
    new Menu (62, 'Manufacturer Reps', '/reps', null, '_blank', false, 60, false), 
    new Menu (63, 'Partners', '/partners', null, '_blank', false, 60, false), 
    new Menu (64, 'Direct', '/contact', null, '_blank', false, 60, false), 
    // Support
    new Menu (70, 'Support', '/support', null, null, true, 0, false), 
    new Menu (71, 'Support Home', '/support', null, '_blank', false, 70, true), 
    new Menu (72, 'Selection Guides', '/support/selection-guides', null, '_blank', false, 70, false), 
    new Menu (73, 'Brochures', '/support/brochures', null, '_blank', false, 70, false), 
    new Menu (74, 'Pictures', '/support/pictures', null, '_blank', false, 70, false), 
    new Menu (75, '360 Views', '/support/three-sixty-views', null, '_blank', false, 70, false), 
    new Menu (76, 'Videos', '/support/videos', null, '_blank', false, 70, false), 
    new Menu (77, 'Slide Shows', '/support/slide-shows', null, '_blank', false, 70, false), 
    new Menu (78, 'Customers', '/support/customers', null, '_blank', false, 70, false), 
    new Menu (79, 'Case Studies', '/support/case-studies', null, '_blank', false, 70, false), 
    new Menu (80, 'Installation Guides', '/support/install-guides', null, '_blank', false, 70, false), 
    new Menu (81, 'User Drawings', '/support/drawings', null, '_blank', false, 70, false), 
    new Menu (82, 'Wiring Diagrams', '/support/wiring-diagrams', null, '_blank', false, 70, false), 
    // About Us
    new Menu (100, 'About Us', '/support', null, null, true, 0, false), 
    new Menu (101, 'About SUSI Adapters', '/about', null, null, false, 100, false), 
    new Menu (102, 'Privacy Policy', '/privacy-policy', null, null, false, 100, false), 
    // Contact Us
    new Menu (140, 'Contact Us', '/contact', null, null, false, 0, false),  
    // new Menu (102, 'Search', '/search', null, null, false, 0, false),  
    
]


export const verticalMenuItems = [ 
    new Menu (1, 'Home', '/', null, null, false, 0, false),
    // Products
    new Menu (20, 'Products', '/products', null, null, true, 0, false), 
    new Menu (21, 'Adapter Series', null, null, null, true, 20, false), 
    new Menu (210, 'SWA (Flush Mount Panel)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1050-01-B%20Flush%20Mount%20Panel%20Adapters.pdf?alt=media&token=a2b15376-0c87-4801-9d87-4acfeba6e1d4', '_blank', false, 21, false), 
    new Menu (211, 'SWB (Surface Mount Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1100-01-B%20Surface%20Mount%20Panel%20Adapter.pdf?alt=media&token=59d32ca4-e4d0-47d8-8a6f-ca5cb1d98916', '_blank', false, 21, false), 
    new Menu (212, 'SWD (Retrofit Panel Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1500-03-B%20Retrofit%20Panel%20Adapters.pdf?alt=media&token=b1733f15-f21e-4917-bc45-a282e09bf017', '_blank', false, 21, false), 
    new Menu (213, 'SWF (Non-Case Surface Mount)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-3710-00-A%20SWF%20Surface%20Mount%20Panel%20Adapters.pdf?alt=media&token=de51d721-2c6c-4bb4-9244-974690c36b9f', '_blank', false, 21, false), 
    new Menu (214, 'SWI (Integrated Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1700-00-A%20Integrated%20Adapters.pdf?alt=media&token=7b46024e-93fe-4645-87bc-46b389968940', '_blank', false, 21, false), 
    new Menu (215, 'SWL (Retrofit Relay Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1800-00-E_SWL_%20retrofit_relay_adapters_schneider.pdf?alt=media&token=a5569031-7491-4a2b-9afd-89ecd6946e5b', '_blank', false, 21, false), 
    new Menu (216, 'SWR (Retrofit Socket Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Fadapter_series%2F600-1600-00-B%20Retrofit%20Socket%20Adapters.pdf?alt=media&token=de964cc8-da9e-4984-bc71-0c2a9a0cf51e', '_blank', false, 21, false),
    new Menu (217, 'PS (Panel Socket Adapters)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FAdapter%20Series%2F600-3001-10-A%20%20PS9%20SUSI.PDF?alt=media&token=1d79c7c6-86e7-4a84-b68d-edb950dd1a6e', '_blank', false, 21, false), 
    new Menu (22, 'Our Solutions', null, null, null, true, 20, false), 
    new Menu (220, 'Solutions Overview', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/products%2Four_solutions%2F600-1000-02-E%20Solution%20to%20Panel%20Metering.pdf?alt=media&token=d035e223-9ebb-4e81-9698-630e4a971791', '_blank', false, 22, true), 
    new Menu (221, 'Utility', 'applications-utility', null, null, false, 22, false), 
    new Menu (221, 'Industrial', 'applications-industrial', null, null, false, 22, false), 
    new Menu (221, 'Commercial', 'applications-commercial', null, null, false, 22, false), 
    new Menu (221, 'Universities', 'applications-universities', null, null, false, 22, false), 
    new Menu (25, 'Pictures', '/support/pictures', null, null, false, 20, false), 
    new Menu (24, 'Portable Load Boxes', null, null, null, true, 20, false), 
    new Menu (240, 'LB-50 (Form 1, 2 12)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FPortable%20Load%20Boxes%2F600-3050-00-B%20Brochure%20LB-50-M.pdf?alt=media&token=58da43d2-a1bf-44c4-bd35-fa55c771c9cf', '_blank', false, 24, false), 
    new Menu (241, 'LB-300 (Form 5,9)', null, 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/2020%20Website%20Files%2FPage%20-%20Product%2FPortable%20Load%20Boxes%2F600-3000-00-B%20Load%20Box.pdf?alt=media&token=5d752adc-4866-4e17-937d-c742c9bc3546', '_blank', false, 24, false), 
    new Menu (25, 'Selection Guides', '/support/selection-guides', null, null, false, 20, false), 
    // Partners
    new Menu (40, 'Partners', '/partners', null, null, true, 0, false), 
    new Menu (41, 'All Partners', '/partners', null, '_blank', false, 40, true), 
    new Menu (42, 'AccuEnergy', null, 'http://accuenergyadapters.com/', '_blank', false, 40, false), 
    new Menu (43, 'Aclara', null, 'http://aclaraadapters.com/', '_blank', false, 40, false), 
    new Menu (44, 'Ametek', null, 'http://ametekadapters.com/index.php/ametek', '_blank', false, 40, false), 
    new Menu (45, 'Bitronics', null, 'http://bitronicsadapters.com/', '_blank', false, 40, false), 
    new Menu (46, 'Crompton', null, 'http://cromptonadapters.com/', '_blank', false, 40, false), 
    new Menu (47, 'Eaton', null, 'http://eatonadapters.com/', '_blank', false, 40, false), 
    new Menu (48, 'Electro Industries', null, 'http://electroindadapters.com/', '_blank', false, 40, false), 
    new Menu (49, 'Elster', null, 'http://elsteradapters.com/', '_blank', false, 40, false), 
    new Menu (50, 'GE', null, 'http://geadapters.com/', '_blank', false, 40, false), 
    new Menu (51, 'Itron', null, 'http://itronadapters.com/', '_blank', false, 40, false), 
    new Menu (52, 'Landis+Gyr', null, 'http://landisgyradapters.com/', '_blank', false, 40, false), 
    new Menu (53, 'Rockwell Automation', null, 'http://raadapters.com/', '_blank', false, 40, false), 
    new Menu (54, 'Satec', null, 'http://satecadapters.com/', '_blank', false, 40, false), 
    new Menu (55, 'Schneider Electric', null, 'http://schneideradapters.com/', '_blank', false, 40, false), 
    new Menu (56, 'Siemens', null, 'http://siemensadapters.com/', '_blank', false, 40, false), 
    // How to buy
    new Menu (60, 'How to Buy', '/partners', null, null, true, 0, false), 
    new Menu (61, 'Distributors', '/distributors', null, '_blank', false, 60, false), 
    new Menu (62, 'Manufacturer Reps', '/reps', null, '_blank', false, 60, false), 
    new Menu (63, 'Partners', '/partners', null, '_blank', false, 60, false), 
    new Menu (64, 'Direct', '/contact', null, '_blank', false, 60, false), 
    // Support
    new Menu (70, 'Support', '/support', null, null, true, 0, false), 
    new Menu (71, 'Support Home', '/support', null, '_blank', false, 70, true), 
    new Menu (72, 'Selection Guides', '/support/selection-guides', null, '_blank', false, 70, false), 
    new Menu (73, 'Brochures', '/support/brochures', null, '_blank', false, 70, false), 
    new Menu (74, 'Pictures', '/support/pictures', null, '_blank', false, 70, false), 
    new Menu (75, '360 Views', '/support/three-sixty-views', null, '_blank', false, 70, false), 
    new Menu (76, 'Videos', '/support/videos', null, '_blank', false, 70, false), 
    new Menu (77, 'Slide Shows', '/support/slide-shows', null, '_blank', false, 70, false), 
    new Menu (78, 'Customers', '/support/customers', null, '_blank', false, 70, false), 
    new Menu (79, 'Case Studies', '/support/case-studies', null, '_blank', false, 70, false), 
    new Menu (80, 'Installation Guides', '/support/install-guides', null, '_blank', false, 70, false), 
    new Menu (81, 'User Drawings', '/support/drawings', null, '_blank', false, 70, false), 
    new Menu (82, 'Wiring Diagrams', '/support/wiring-diagrams', null, '_blank', false, 70, false), 
    // About Us
    new Menu (100, 'About Us', '/support', null, null, true, 0, false), 
    new Menu (101, 'About SUSI Adapters', '/about', null, null, false, 100, false), 
    new Menu (102, 'Privacy Policy', '/privacy-policy', null, null, false, 100, false), 
    // Contact Us
    new Menu (140, 'Contact Us', '/contact', null, null, false, 0, false),  
    // new Menu (102, 'Search', '/search', null, null, false, 0, false),  
    

]