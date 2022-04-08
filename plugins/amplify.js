import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import awsconfig from '@/src/aws-exports'
import '@aws-amplify/ui-vue'
Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.component(components)