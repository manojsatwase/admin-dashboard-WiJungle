export const countEventTypes = (data) => {
    const counts = {};
    data.forEach(item => {
        counts[item.event_type] = (counts[item.event_type] || 0) + 1;
    });
    return counts;
};

export const countSourceIPs = (data) => {
    const counts = {};
    data.forEach(item => {
        counts[item.src_ip] = (counts[item.src_ip] || 0) + 1;
    });
    return counts;
};

export const countDestPorts = (data) => {
    const counts = {};
    data.forEach(item => {
        counts[item.dest_port] = (counts[item.dest_port] || 0) + 1;
    });
    return counts;
};

export const countEventsOverTime = (data) => {
    const counts = {};
    data.forEach(item => {
        const date = new Date(item.timestamp).toISOString().split('T')[0];
        counts[date] = (counts[date] || 0) + 1;
    });
    return counts;
};