// src/adminjs/index.ts

// ...

import { brandingOptions } from './branding'
import { authtenticationOptions } from './authentication'
import AdminJS from 'adminjs'
import { locale } from './locale'
import { adminJsResources } from './resources'
import { database } from '../database'
import { dashboardOptions } from './dashboard'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'

AdminJS.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJS({
  databases: [database],
  resources: adminJsResources,
  rootPath: '/admin',
  dashboard: dashboardOptions,
  locale: locale,
  branding: brandingOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  { resave: false, saveUninitialized: false }
)