/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { Node } from '@nextcloud/files'

declare module '@nextcloud/event-bus' {
	interface NextcloudEvents {
		'systemtags:node:updated': Node
	}
}

export {}
