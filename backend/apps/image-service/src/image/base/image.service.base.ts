/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Image } from "@prisma/client";

export class ImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ImageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageCountArgs>
  ): Promise<number> {
    return this.prisma.image.count(args);
  }

  async findMany<T extends Prisma.ImageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindManyArgs>
  ): Promise<Image[]> {
    return this.prisma.image.findMany(args);
  }
  async findOne<T extends Prisma.ImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>
  ): Promise<Image | null> {
    return this.prisma.image.findUnique(args);
  }
  async create<T extends Prisma.ImageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageCreateArgs>
  ): Promise<Image> {
    return this.prisma.image.create<T>(args);
  }
  async update<T extends Prisma.ImageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageUpdateArgs>
  ): Promise<Image> {
    return this.prisma.image.update<T>(args);
  }
  async delete<T extends Prisma.ImageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageDeleteArgs>
  ): Promise<Image> {
    return this.prisma.image.delete(args);
  }
}
