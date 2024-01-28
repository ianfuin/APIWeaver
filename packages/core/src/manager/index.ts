import { type OptimizationConfig } from '../config';
import { createLogger } from '../logger';
import { OriginManager } from './OriginManager';

const logger = createLogger('info', { prefix: 'manager' });

export class Manager {
  private originManagerInsts: Record<string, OriginManager | null> = {};
  private currentOriginName = '';

  constructor(
    private optimizationConfig: OptimizationConfig,
    private configPath: string,
  ) {}

  getConfigPath() {
    return this.configPath;
  }

  getCurrentOriginName() {
    return this.currentOriginName;
  }

  setCurrentOriginName(originName: string) {
    this.currentOriginName = originName;
  }

  getCurrentOriginManager(originName = this.currentOriginName) {
    if (!originName) return null;

    if (!this.originManagerInsts[originName]) {
      const origin = this.optimizationConfig.origins.find(
        (o) => o.name === originName,
      );

      this.originManagerInsts[originName] = origin
        ? new OriginManager(origin)
        : null;
    }

    if (!this.originManagerInsts[originName]) {
      logger.warn(`name ${originName} 不存在!`, { timestamp: true });
    }

    return this.originManagerInsts[originName];
  }

  getOriginNames() {
    return this.optimizationConfig.origins.map((origin) => {
      return origin.name;
    });
  }

  generate(originName: string = this.currentOriginName) {
    this.getCurrentOriginManager(originName)
      ?.startGenerate()
      .catch((error: Error) => {
        logger.error(`${originName} 执行异常! ${error.message}`, {
          timestamp: true,
        });
      });
  }

  generateAll() {
    this.optimizationConfig.origins.forEach((origin) => {
      this.generate(origin.name);
    });
  }
}
