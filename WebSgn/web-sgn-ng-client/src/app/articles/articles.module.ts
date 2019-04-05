import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditorComponent } from './components/article-editor/article-editor.component';
import { ArticleBlockComponent } from './components/article-block/article-block.component';
import { ArticleBlockTitleComponent } from './components/article-block-title/article-block-title.component';
import { ArticleBlockImageComponent } from './components/article-block-image/article-block-image.component';
import { ArticleBlockTextComponent } from './components/article-block-text/article-block-text.component';
import { MaterialImportsModule } from './../material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
  ],
  declarations: [
    ArticleEditorComponent,
    ArticleBlockComponent,
    ArticleBlockTitleComponent,
    ArticleBlockImageComponent,
    ArticleBlockTextComponent,
  ],
  exports: [ArticleEditorComponent,]
})
export class ArticlesModule { }
