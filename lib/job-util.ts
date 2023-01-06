import { readFileSync } from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

export interface Job {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}

export async function getAllJobs(): Promise<Job> {
  const filePath = path.join(process.cwd(), '/data/data.json')
  const objectData = JSON.parse(readFileSync(filePath, 'utf-8'))
  return objectData.jobs
}
