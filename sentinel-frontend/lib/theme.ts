export const statusColors = {
    healthy: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500',
        dot: 'bg-green-500'
    },
    warning: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500',
        dot: 'bg-yellow-500'
    },
    critical: {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500',
        dot: 'bg-red-500'
    },
    unknown: {
        bg: 'bg-gray-500/20',
        text: 'text-gray-400',
        border: 'border-gray-500',
        dot: 'bg-gray-500'
    },
    degraded: { // Added based on ServiceCard usage
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500',
        dot: 'bg-yellow-500'
    },
    down: { // Added based on ServiceCard usage
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500',
        dot: 'bg-red-500'
    },
    info: { // Added for IncidentCard usage
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500',
        dot: 'bg-blue-500'
    }
} as const;

export const severityColors = {
    low: statusColors.healthy,
    medium: statusColors.warning,
    high: {
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        border: 'border-orange-500',
        dot: 'bg-orange-500'
    },
    critical: statusColors.critical,
    info: statusColors.info // Added for IncidentCard usage
} as const;

export type Status = keyof typeof statusColors;
export type Severity = keyof typeof severityColors;

export function getStatusColor(status: string): typeof statusColors[Status] {
    return statusColors[status as Status] || statusColors.unknown;
}

export function getSeverityColor(severity: string): typeof severityColors[Severity] {
    return severityColors[severity as Severity] || severityColors.low;
}
