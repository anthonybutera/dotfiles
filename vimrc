"Use double quotes to comment lines out in .vimrc


" Vim-Plug
call plug#begin('~/.vim/plugged')

  Plug 'junegunn/vim-plug'
  Plug 'scrooloose/nerdtree'
  Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
  Plug 'junegunn/fzf.vim'
  Plug 'morhetz/gruvbox'
  Plug 'BurntSushi/ripgrep'
  Plug 'rhysd/vim-healthcheck'
  Plug 'itchyny/lightline.vim'

call plug#end()


" set leader key and color scheme
let g:mapleader="\<Space>"
" colorscheme gruvbox


syntax on                               " Enables syntax highlighing
set background=dark
highlight Comment ctermfg=green
set showcmd
set showmatch
set ignorecase
set smartcase
set incsearch
set relativenumber
set wildmenu
set ruler
set hidden                              " Required to keep multiple buffers open multiple buffers
set encoding=utf-8                      " The encoding displayed 
set pumheight=10                        " Makes popup menu smaller
set fileencoding=utf-8                  " The encoding written to file
set cmdheight=1                         " More space for displaying messages
set iskeyword+=-                       	" treat dash separated words as a word text object"
set mouse=a                             " Enable your mouse
set splitbelow                          " Horizontal splits will automatically be below
set splitright                          " Vertical splits will automatically be to the right
set t_Co=256                            " Support 256 colors
set conceallevel=0                      " So that I can see `` in markdown files
set tabstop=2                           " Insert 2 spaces for a tab
set shiftwidth=2                        " Change the number of space characters inserted for indentation
set smarttab                            " Makes tabbing smarter will realize you have 2 vs 4
set expandtab                           " Converts tabs to spaces
set smartindent                         " Makes indenting smart
set autoindent                          " Good auto indent
set laststatus=2                        " Always display the status line
set cursorline                          " Enable highlighting of the current line
" set cursorcolumn                        " Enable highlighting of the current column
set showtabline=2                       " Always show tabs 
set noshowmode                          " We don't need to see things like -- INSERT -- anymore
set nobackup                            " This is recommended by coc
set nowritebackup                       " This is recommended by coc
set noswapfile                          " Same as nobackup
set autoread                            " Autoread
set updatetime=250                      " Faster completion
set timeoutlen=500                      " By default timeoutlen is 1000 ms
set clipboard=unnamedplus               " Copy paste between vim and everything else
set scrolloff=10						            " Keeps 10 lines above or below visible while scrolling
" set termguicolors                       " Sets TrueColor to ON




" Keybindings
" ===========

" Page 1/2 Up 
nnoremap <S-j> <C-d>


" Page 1/2 Down 
nnoremap <S-k> <C-u>


" Page Down Full
nnoremap <C-j> <C-d>


" Page Up Full
nnoremap <C-k> <C-u>



" Miscellaneous
" =============

" Go to the beginning of the line
nnoremap gh 0


" Go to the end of the line
nnoremap gl $


" Copy to the end of the line, no whitespace
map Y y$


" Alternate way to writeout
nnoremap <leader>w :w<CR>
nnoremap <S-w> :w<CR>


" Alternate way to save
nnoremap <leader>s :x<CR>
nnoremap <S-s> :x<CR>


" Alternate way to quit
nnoremap <leader>q :q!<CR>
nnoremap <S-q> :q!<CR>


" Alternate way to split buffers
nnoremap <S-v>      :vsp<CR>
nnoremap <S-h>      :sp<CR>
nnoremap <leader>ls :ls<CR>


" Escape real quick
inoremap jk <Esc>
inoremap kj <Esc>
nnoremap <C-c> <Esc>


" Better window navigation
nnoremap <leader>h <C-w>h
nnoremap <leader>j <C-w>j
nnoremap <leader>k <C-w>k
nnoremap <leader>l <C-w>l


"NerdTreeToggle
map <leader>e :NERDTreeToggle<CR>
let g:NERDTreeWinPos = "right"


" Fuzzy Finder
nnoremap <leader>f :Files<CR>
nnoremap <leader>b :Buffers<CR>

