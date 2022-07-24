export type TimeTrackingIdDto = {
  id: number;
  name: string;
}

export class TimeTrackingService {
  fetchAllTrackingIds(): Promise<TimeTrackingIdDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 0, name: "Debug"},
          { id: 1, name: "Write Documentation"},
          { id: 2, name: "Implement Feature"},
          { id: 3, name: "Attend Meeting"},
          { id: 4, name: "Prepare Workshop"},
        ])
      }, 500)
    })
  }
}