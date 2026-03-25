import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oyik.ai'
  
  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/chat`, lastModified: new Date() },
    { url: `${baseUrl}/services/voice`, lastModified: new Date() },
    { url: `${baseUrl}/services/reminders`, lastModified: new Date() },
    { url: `${baseUrl}/services/email`, lastModified: new Date() },
    { url: `${baseUrl}/services/ai-marketing`, lastModified: new Date() },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
  ]
}
