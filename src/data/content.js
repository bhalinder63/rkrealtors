const unsplash = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroImages = [
  unsplash('photo-1600596542815-ffad4c1539a9', 1800),
  unsplash('photo-1600585154340-be6161a56a0c', 1800),
  unsplash('photo-1600047509807-ba8f99d2cdde', 1800),
  unsplash('photo-1580587771525-78b9dba3b914', 1800),
]
export const aboutImg = unsplash('photo-1600607687939-ce8a6c25118c', 900)

export const services = [
  {
    mark: '01',
    title: 'Residential Plots',
    desc: 'Approved plots and society lands across New Chandigarh, Mohali and Patiala.',
  },
  {
    mark: '02',
    title: 'Commercial',
    desc: 'Shops, SCOs and showrooms on high-footfall and corporate corridors.',
  },
  {
    mark: '03',
    title: 'Builder Floor',
    desc: 'Ready-to-move and under-construction floors with clear titles.',
  },
  {
    mark: '04',
    title: 'Flats',
    desc: 'Apartments in gated societies — resale, fresh booking and rentals.',
  },
  {
    mark: '05',
    title: 'Villas & Kothis',
    desc: 'Premium independent villas and kothis in planned residential sectors.',
  },
  {
    mark: '06',
    title: 'Farm Houses',
    desc: 'Weekend and investment farm houses around New Chandigarh.',
  },
  {
    mark: '07',
    title: 'Agriculture Land',
    desc: 'Verified khasra-checked agricultural parcels of every size.',
  },
]

export const listings = [
  {
    tag: 'Residential',
    title: '4 BHK Kothi',
    location: 'Sector 9 · Chandigarh',
    meta: '500 sq yd · Corner plot · Fully renovated',
    price: '₹ 5.75 Cr',
    img: unsplash('photo-1568605114967-8130f3a36994'),
  },
  {
    tag: 'Commercial',
    title: 'SCO Showroom',
    location: 'Sector 82 · Mohali',
    meta: '2,200 sq ft · Ground + first floor · Prime road',
    price: '₹ 3.20 Cr',
    img: unsplash('photo-1486406146926-c627a92ad1ab'),
  },
  {
    tag: 'Villa',
    title: 'Independent Villa',
    location: 'New Chandigarh',
    meta: '300 sq yd · 4 BHK · Private garden',
    price: '₹ 2.85 Cr',
    img: unsplash('photo-1613490493576-7fde63acd811'),
  },
  {
    tag: 'Flat',
    title: '3 BHK Flat',
    location: 'Aerocity · Mohali',
    meta: '1,650 sq ft · Club + pool · 8th floor',
    price: '₹ 1.15 Cr',
    img: unsplash('photo-1545324418-cc1a3fa10c00'),
  },
  {
    tag: 'Farm House',
    title: 'Half Acre Farm House',
    location: 'Kurali Road · New Chandigarh',
    meta: '2,420 sq yd · Boundary walled · Borewell',
    price: '₹ 2.10 Cr',
    img: unsplash('photo-1505843513577-22bb7d21e455'),
  },
  {
    tag: 'Agriculture',
    title: 'Agricultural Land Parcel',
    location: 'Rajpura Belt · Patiala',
    meta: '4 acres · Highway touch · Clear khasra',
    price: '₹ 65 L / acre',
    img: unsplash('photo-1500382017468-9049fed747ef'),
  },
]

export const team = [
  {
    name: 'Ramandeep Singh',
    role: 'Founder & Property Consultant',
    phone: '+91 98145 53349',
    tel: 'tel:+919814553349',
  },
  {
    name: 'Kamaldeep Singh',
    role: 'Property Consultant',
    phone: '+91 78149 53349',
    tel: 'tel:+917814953349',
  },
]

export const stats = [
  { value: '4', label: 'Cities Covered' },
  { value: '7', label: 'Property Types' },
  { value: '100%', label: 'Verified Listings' },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#listings', label: 'Listings' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export const contact = {
  ramandeepPhone: '9814553349',
  ramandeepTel: 'tel:+919814553349',
  kamaldeepPhone: '7814953349',
  kamaldeepTel: 'tel:+917814953349',
  whatsapp: 'https://wa.me/919814553349',
  instagram: 'https://www.instagram.com/rkrealtors.in/',
}
