import { Application } from '@hotwired/stimulus'

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }

// import ActiveStorage from "@rails/activestorage";
// ActiveStorage.start();
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// import '~/controllers'

// const application = Application.start()

// Configure Stimulus development experience
// application.debug = false
// window.Stimulus = application

// Error handling
// const defaultErrorHandler = application.handleError.bind(application)

// // create a ne composed error handler with Appsignal
// const appsignalErrorHandler = (error, message, detail = {}) => {
//   defaultErrorHandler(error, message, detail)
//   appsignal.sendError(error, (span) => { span.setTags({ message }) })
// }

// // overwrite the default handler with our new composed handler
// application.handleError = appsignalErrorHandler

// export { application }

// Page transitions
