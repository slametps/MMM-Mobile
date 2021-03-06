const config = {
    config: {
        values: {
            Object: {
                values: {
                    titleReplace: {
                        description: 'An object of textual replacements applied to the tile of the event. This allow to remove or replace certains words in the title.',
                        values: {
                            Object: {
                                values: {
                                    '*': {
                                        values: {
                                            String: '*'
                                        }
                                    }
                                }
                            }
                        },
                        default: { 'De verjaardag van ': '', '\'s birthday': '' }
                    },
                    calendars: {
                        description: 'The list of calendars.',
                        values: {
                            Array: {
                                values: {
                                    Object: {
                                        values: {
                                            url: {
                                                values: {
                                                    String: '*'
                                                }
                                            },
                                            symbol: {
                                                values: {
                                                    String: '*'
                                                }
                                            },
                                            repeatingCountTitle: {
                                                values: {
                                                    String: '*'
                                                }
                                            },
                                            user: {
                                                values: {
                                                    String: '*'
                                                }
                                            },
                                            pass: {
                                                values: {
                                                    String: '*'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        default: [
                            {
                                url: 'http://www.calendarlabs.com/templates/ical/US-Holidays.ics',
                                symbol: 'calendar'
                            }
                        ]
                    },
                    maximumEntries: {
                        description: 'The maximum number of events shown.',
                        values: {
                            Integer: {
                                min: 0,
                                max: 100
                            }
                        },
                        default: 10
                    },
                    maximumNumberOfDays: {
                        description: 'The maximum number of days in the future.',
                        values: {
                            Integer: '*'
                        },
                        default: 365
                    },
                    displaySymbol: {
                        description: 'Display a symbol in front of an entry.',
                        values: {
                            Boolean: [
                                true,
                                false
                            ]
                        },
                        default: true
                    },
                    defaultSymbol: {
                        description: 'The default symbol.',
                        link: {
                            name: 'See Font Awesome website.',
                            url: 'http://fontawesome.io/icons/'
                        },
                        values: {
                            String: '*'
                        },
                        default: 'calendar'
                    },
                    maxTitleLength: {
                        description: 'The maximum title length.',
                        values: {
                            Integer: {
                                min: 10,
                                max: 50
                            }
                        },
                        default: 25
                    },
                    fetchInterval: {
                        description: 'How often does the content needs to be fetched? (Milliseconds)',
                        values: {
                            Integer: {
                                min: 1000,
                                max: 86400000
                            }
                        },
                        default: 300000
                    },
                    animationSpeed: {
                        description: 'Speed of the update animation. (Milliseconds)',
                        values: {
                            Integer: {
                                min: 0,
                                max: 5000
                            }
                        },
                        default: 2000
                    },
                    fade: {
                        description: 'Fade the future events to black. (Gradient)',
                        values: {
                            Boolean: [
                                true,
                                false
                            ]
                        },
                        default: true
                    },
                    fadePoint: {
                        description: 'Where to start fade?',
                        values: {
                            Float: {
                                min: 0.1,
                                max: 1.0
                            }
                        },
                        default: 0.25
                    },
                    displayRepeatingCountTitle: {
                        description: 'Show count title for yearly repeating events (e.g. \'X. Birthday\', \'X. Anniversary\').',
                        values: {
                            Boolean: [
                                true,
                                false
                            ]
                        },
                        default: false
                    },
                    dateFormat: {
                        description: 'Format to use for the date of events (when using absolute dates).',
                        link: {
                            name: 'See Moment.js formats',
                            url: 'http://momentjs.com/docs/#/parsing/string-format/'
                        },
                        values: {
                            String: '*'
                        },
                        default: 'MMM Do'
                    },
                    timeFormat: {
                        description: 'Display event times as absolute dates, or relative time.',
                        values: {
                            String: [
                                'absolute',
                                'relative'
                            ]
                        },
                        default: 'relative'
                    },
                    getRelative: {
                        description: 'How much time (in hours) should be left until calendar events start getting relative?',
                        values: {
                            Integer: { min: 0, max: 48 }
                        },
                        default: 6
                    },
                    urgency: {
                        description: 'When using a timeFormat of absolute, the urgency setting allows you to display events within a specific time frame as relative. This allows events within a certain time frame to be displayed as relative (in xx days).',
                        values: {
                            Integer: '*'
                        },
                        default: 7
                    },
                    broadcastEvents: {
                        description: 'Broadcast all the events to all other modules.',
                        values: {
                            Boolean: [
                                true,
                                false
                            ]
                        },
                        default: true
                    },
                    hidePrivate: {
                        description: 'Hides private calendar events.',
                        values: {
                            Boolean: [
                                true,
                                false
                            ]
                        },
                        default: false
                    }
                }
            }
        }
    }
};

module.exports = config;
