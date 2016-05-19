'use strict'

const electron = require('electron')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 800
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.openDevTools()

  mainWindow.on('close', _ => {
    mainWindow = null
  })
})
