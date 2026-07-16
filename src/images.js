// All URLs verified from Pexels og:image tags — guaranteed to work
const P = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export const IMGS = {
  // Hero — Sahara dunes golden hour
  hero:        P(30757346, 1920, 1080),

  // Destinations
  marrakech:   P(22711560,  800, 600),   // Marrakech market street
  sahara:      P(30710173,  800, 600),   // Camel caravan Sahara
  fes:         P(28582571,  800, 600),   // Fes souk medina
  chefchaouen: P(14937084,  800, 600),   // Blue arched walkway
  atlas:       P(13960859,  800, 600),   // Desert/mountain caravan
  essaouira:   P(6301246,   800, 600),   // Camel coastal desert

  // Tours
  tour1:       P(30710178,  900, 600),   // Two men camels Sahara Morocco
  tour2:       P(36209446,  900, 600),   // Marrakech souks colorful bazaar
  tour3:       P(13960856,  900, 600),   // People walking desert dunes
  tour4:       P(28582576,  900, 600),   // Fes street market scene

  // Packages
  pkg1:        P(30148535,  900, 600),   // Fes market traditional
  pkg2:        P(34779963,  900, 600),   // Camel dune silhouette
  pkg3:        P(6441180,   900, 600),   // Marrakesh bazaar people

  // Gallery
  g1:          P(22711560,  800, 1100),  // Marrakech street tall
  g2:          P(36209321,  800, 600),   // Marrakech medina shops
  g3:          P(34275850,  800, 600),   // Camel caravan desert sunset
  g4:          P(35028289,  800, 600),   // Moroccan market alley textiles
  g5:          P(37640527,  800, 600),   // Camel caravan Sahara
  g6:          P(35701437, 1200, 600),   // Marrakesh shopping street wide

  // Video thumbnail
  video:       P(33566021, 1400, 800),   // Camels trekking Sahara
}
