export interface TelemetricEvent {
    id: number;
    domElement: string;
    mouseX: number;
    mouseY: number;
    timestamp: Date;
    secondsOnline: string;
    url: string;
    userIp: string;
    sessionId: string;
    viewportWidth: number;
    viewportHeight: number;
}
