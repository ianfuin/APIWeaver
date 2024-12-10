export interface WorkspaceTransformEvent {
  workspaceId?: string;
}

export type Body = WorkspaceTransformEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/ws/transform/processPersonalWorkspace';
const method = 'post';
