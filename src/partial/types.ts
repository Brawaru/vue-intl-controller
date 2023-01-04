import type { AutomationPartial } from './prefers.js'
import type { ConfigPartial } from './config.js'
import type { LocaleDataPartial } from './data.js'
import type { EventTargetPartial } from './events.js'
import type { IntlPartial } from './intl.js'
import type { LocalesPartial } from './locales.js'

export interface IntlController<T>
  extends AutomationPartial,
    ConfigPartial,
    LocaleDataPartial,
    EventTargetPartial<T>,
    IntlPartial<T>,
    LocalesPartial {}
