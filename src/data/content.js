import servicesData from '../../content/services.json'
import listingsData from '../../content/listings.json'
import teamData from '../../content/team.json'
import settings from '../../content/settings.json'

export const heroImages = settings.heroImages
export const aboutImg = settings.aboutImg
export const services = servicesData.items
export const listings = listingsData.items
export const team = teamData.items
export const stats = settings.stats

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#listings', label: 'Listings' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export const contact = settings.contact
