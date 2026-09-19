import type { Event } from '../types';

export const events: Event[] = [
  {
    id: 'e1',
    slug: 'sunday-book-club',
    title: 'Sunday Book Club',
    date: '2026-09-27',
    time: '11:00 AM',
    locationId: 'koramangala',
    description: 'Join us for a slow Sunday morning discussing modern literature over coffee and freshly baked croissants.',
    host: 'Story Book Club',
    capacity: 20
  },
  {
    id: 'e2',
    slug: 'coffee-tasting-workshop',
    title: 'Specialty Coffee Tasting',
    date: '2026-10-04',
    time: '3:00 PM',
    locationId: 'indiranagar',
    description: 'Learn the nuances of different roasts and brewing methods with our head barista. Perfect for coffee enthusiasts.',
    host: 'Head Barista, Story Coffee',
    capacity: 15
  },
  {
    id: 'e3',
    slug: 'creative-writers-meetup',
    title: 'Creative Writers Meetup',
    date: '2026-09-10',
    time: '6:30 PM',
    locationId: 'kamanahalli',
    description: 'A space to share your stories, get feedback, and meet fellow writers in the neighbourhood.',
    host: 'Bengaluru Writers Guild',
    isPast: true
  }
];
